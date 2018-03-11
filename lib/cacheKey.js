module.exports = {
    smsCode: (type, phone) => {
        return `sms:${type}:${phone}`;
    }
};