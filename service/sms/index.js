
const SMSClient = require('@alicloud/sms-sdk');

class SMS extends SMSClient {
    /**
     *
     * @param options
     *  options.accessKeyId -
     *  options.secretAccessKey -
     */
    constructor(options) {
        super(options);
    }

    async sendMsg (opts) {
        let phone = opts.phone;
        let signName = opts.signName;
        let templateCode = opts.templateCode;
        let templateParam = opts.templateParam;

        if(!phone || !signName || !templateCode || !templateParam) {
            throw new Error('Parameter is required.');
        }

        try {
            let result = await this.sendSMS({
                PhoneNumbers: phone,
                SignName: signName,
                TemplateCode: templateCode,
                TemplateParam: typeof templateParam === 'string' ? templateParam : JSON.stringify(templateParam)
            });

            if(result.Code === 'OK') {
                return {
                    code: 'success'
                };
            } else {
                console.warn('failed to send message, result code: ', result.code);
                throw new Error(`Failed to send message to ${phone}`);
            }
        } catch(error) {
            console.warn('failed to send message, error: ', error);
            throw new Error(`Failed to send message to ${phone}`);
        }
    }
}

module.exports = SMS;
