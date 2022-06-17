process.env.NODE_ENV = 'test';

import request from 'supertest';
import app from '../index.js';
import chai from 'chai';
import chaiHttp from 'chai-http';

let should = chai.should();
chai.use(chaiHttp);

describe('Employees', () => {
  
    describe('/create Employee', () => {
        it('it should GET all the employees', (done) => {
         request(app)
              .post('/employees')
              .set('Accept', 'application/json')
              .expect('Content-Type', /json/)
              .expect(200)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object') || res.body.should.be.a('array');
                done();
              });
        });
    });
})
