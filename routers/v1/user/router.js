const handlerLoader = require(_base + 'middleware').handlerLoader;

module.exports = function (router) {
    router.post(
        '/users/signup',
        handlerLoader('handlers.v1.user.signup.post')
    );

    router.post(
        '/users/signin',
        handlerLoader('handlers.v1.user.signin.post')
    );
};