//POST /v1/users/signin
const Base = require(_base + 'handlers/Base');
const ctrl = require(_base + 'ctrl');

class Handler extends Base{
    static validateParams (ctx) {
        if(!ctx.request.body.phone) {
            throw new Error('请输入手机号');
        }

        if(!ctx.request.body.password) {
            throw new Error('请输入密码');
        }
    }

    static getParams (ctx) {
        return {
            phone: ctx.request.body.phone,
            password: ctx.request.body.password
        };
    }

    static async execute (ctx, next) {
        let context = ctx.context;
        let params;

        this.validateParams(ctx);
        params = this.getParams(ctx);

        let userCtrl = ctrl.createUser(context);
        let user = await userCtrl.signin(params);

        ctx.body = {
            statusCode: 200,
            data: this.outUser(user)
        };

        await next();
    }
}

module.exports = {
    class: Handler,
    execute: Handler.execute.bind(Handler)
};
