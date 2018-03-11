const should = require('should');
const app = require('../../../../../server');
const agent = require('supertest')(app.callback());

describe('SMS model ',function(){
    before(function(done){
        done();
    });

    after(function(done){
        done();
    });

    it('post validate sms code ', function (done) {
        agent.post('/v1/sms/validate-code')
            .set('content-type', 'application/json')
            .set('x-request-id', '8bf14a542d5847bbb880039a59bf23421')
            .send({phone: '18328550774', type: 'registration', code: '727637'})
            .end(function(err, res) {
                should.not.exist(err);

                res.statusCode.should.eql(200);

                res.body.meta.code.should.eql(200);
                done();
            });
    });
});