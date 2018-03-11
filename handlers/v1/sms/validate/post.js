//POST /v1/sms/validate-code
const ctrl = require(_base + 'ctrl');

class Handler {
    static validateParams (ctx) {
        if(!ctx.request.body.phone) {
            throw new Error('请输入手机号');
        }
        if(!ctx.request.body.code) {
            throw new Error('请输入验证码');
        }
        if(!ctx.request.body.type) {
            throw new Error('请选择验证码类型');
        }
    }

    static getParams (ctx) {
        return {
            type: ctx.request.body.type,
            code: ctx.request.body.code,
            phone: ctx.request.body.phone
        };
    }

    static async execute (ctx, next) {
        let context = ctx.context;
        let params;

        this.validateParams(ctx);
        params = this.getParams(ctx);

        let sms = ctrl.createSMS(context);
        await sms.validateSmsCode({
            type: params.type,
            code: params.code,
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
