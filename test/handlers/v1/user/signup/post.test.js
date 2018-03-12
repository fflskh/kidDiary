const should = require('should');
const app = require('../../../../../server');
const agent = require('supertest')(app.callback());

describe('user sign up ',function(){
    before(function(done){
        done();
    });

    after(function(done){
        done();
    });

    it('user sign up ', function (done) {
        agent.post('/v1/users/signup')
            .set('content-type', 'application/json')
            .set('x-request-id', '8bf14a542d5847bbb880039a59bf23421')
            .send({phone: '18328550774', password: '123456'})
            .end(function(err, res) {
                should.not.exist(err);

                res.statusCode.should.eql(200);

                res.body.meta.code.should.eql(200);
                done();
            });
    });
});