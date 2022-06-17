process.env.NODE_ENV = 'test';
import request from 'supertest';
import app from '../index.js';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index.js';


let should = chai.should();
chai.use(chaiHttp);

describe('Employees', () => {
    
    describe('/GET employee list by Id', () => {
        it('it should GET all the employees', (done) => {
          request(app)
              .get('/employees/:id')
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                done();
              });
        });
    });
})
