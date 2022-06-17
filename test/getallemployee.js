process.env.NODE_ENV = 'test';
import db from '../mongo.js'
import request from 'supertest';
import app from '../index.js';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index.js';


let should = chai.should();
chai.use(chaiHttp);

describe('Employees', () => {

    describe('/GET employee list', () => {
        it('it should GET all the employees', (done) => {
          request(app)
              .get('/employees')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
              });
        });
    });
// })
