const uuid = require('node-uuid');
const Base = require('./Base');
const UserModel = require(_base + 'models/User');

class User extends Base {
    constructor(context) {
        super(context);
    }

    /**
     * 登录
     * @param opts
     * @returns {Promise.<Job|*|Promise>}
     */
    async signin (opts) {
        let phone = opts.phone;
        let password = opts.password;

        let existedUser = await UserModel.findOne({
            phone: phone
        }).exec();

        if(!existedUser) {
            throw new Error(`${phone}未注册`);
        }

        if(existedUser.encryptedPassword !== _utils.encryptPassword(password, existedUser.salt)) {
            throw new Error('密码不正确。');
        }

        return existedUser;
    }

    async signup (opts) {
        let phone = opts.phone;
        let password = opts.password;

        let existedUser = await UserModel.findOne({
            phone: phone
        }).exec();

        if(existedUser) {
            throw new Error(`${phone}已被注册`);
        }

        let salt =  uuid.v4().replace(/-/g, '');
        let userData = {
            phone: phone,
            name: '宝妈',
            salt: salt,
            encryptedPassword: _utils.encryptPassword(password, salt)
        };

        let userModel = new UserModel(userData);

        return await userModel.save();
    }
}

module.exports = User;
