const smsService = require(_base + 'service/sms');
const cacheKey = require(_base + 'lib/cacheKey');

class SMS {
    constructor(context) {
        this.context = context;
        this.logger = context.logger;
    }

    async validateSmsCode (opts) {
        let type = opts.type;
        let code = opts.code;
        let phone = opts.phone;

        let context = this.context;
        let key = cacheKey.smsCode(type, phone);

        let res = await context.redisClient.getAsync(key);
        if(code !== res) {
            throw new Error('短信验证码不正确');
        }

        //删除短信验证码
        await context.redisClient.delAsync(key);
    }

    async sendSmsCode (opts) {
        let type = opts.type;
        let phone = opts.phone;

        let context = this.context;

        let sms = new smsService({
            accessKeyId: _config.get('services.sms.accessKeyId'),
            secretAccessKey: _config.get('services.sms.secretAccessKey')
        });

        let code = _utils.getRandDigits(_config.get('services.sms.codeLength'));

        await sms.sendMsg({
            phone: phone,
            signName: _config.get('services.sms.signName'),
            templateCode: _config.get('services.sms.templateCode'),
            templateParam: {code: code}
        });

        let key = cacheKey.smsCode(type, phone);
        await context.redisClient.setAsync(key, code);
        await context.redisClient.expireAsync(key, _config.get('services.sms.ttl'));
    }
}

module.exports = SMS;
