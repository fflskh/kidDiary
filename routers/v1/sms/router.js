const handlerLoader = require(_base + 'middleware').handlerLoader;

module.exports = function (router) {
    router.get(
        '/sms/code',
        handlerLoader('handlers.v1.sms.code.get')
    );

    router.post(
        '/sms/validate-code',
        handlerLoader('handlers.v1.sms.validate.post')
    );
};