const mocha = require('mocha');

const SMS = require('../../../service/sms');
const config = require('../../../config/test.json');

let sms = new SMS({
    accessKeyId: config.services.sms.accessKeyId,
    secretAccessKey: config.services.sms.secretAccessKey
});

describe('test sms ', () =>{
    before(function(done) {
        done();
    });
    after(function(done) {
        done();
    });

    it('send short msg validate param ', function(done) {
        sms.sendMsg({
            // phone: '18328550774',
            signName: 'Baby养成计划',
            templateCode: 'SMS_126364210',
            templateParam: {code: '123456'}
        }).then(res => {
            done(new Error('validate param not work.'));
        }).catch(error => {
            if(error.message == 'Parameter is required.') {
                done();
            } else {
                done(error);
            }
        });
    });

    it('send short msg should be success', function(done) {
        sms.sendMsg({
            phone: '18328550774',
            signName: 'Baby养成计划',
            templateCode: 'SMS_126364210',
            templateParam: {code: '123456'}
        }).then(res => {
            if(res.code === 'success') {
                done();
            } else {
                done('send short msg failed.');
            }
        }).catch(done);
    });
});