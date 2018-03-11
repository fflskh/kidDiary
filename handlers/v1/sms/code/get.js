//GET /v1/sms/code
const ctrl = require(_base + 'ctrl');

class Handler {
    static validateParams (ctx) {
        if(!ctx.query.phone) {
            throw new Error('请输入手机号');
        }

        if(!ctx.query.type) {
            throw new Error('请选择验证码类型');
        }
    }

    static getParams (ctx) {
        return {
            type: ctx.query.type,
            phone: ctx.query.phone
        };
    }

    static async execute (ctx, next) {
        let context = ctx.context;
        let params;

        this.validateParams(ctx);
        params = this.getParams(ctx);

        let sms = ctrl.createSMS(context);
        await sms.sendSmsCode({
            type: params.type,
            phone: params.phone
        });

        ctx.body = {
            statusCode: 200
        };

        await next();
    }
}

module.exports = {
    class: Handler,
    execute: Handler.execute.bind(Handler)
};
