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

    it('get user should be ok ', function (done) {
        agent.get('/v1/sms/code')
            .query({phone: '18328550774', type: 'registration'})
            .set('content-type', 'application/json')
            .set('x-request-id', '8bf14a542d5847bbb880039a59bf23421')
            .end(function(err, res) {
                should.not.exist(err);

                res.statusCode.should.eql(200);

                res.body.meta.code.should.eql(200);
                done();
            });
    });
});