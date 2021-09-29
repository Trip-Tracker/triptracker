const request = require('supertest');
const path = require('path');
const fs = require('fs');

const server = 'http://localhost:3000';


describe('Route Integration', () => {

  describe('/', () => {
    describe('GET', () => {

      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });
    describe('GET', () => {

      it('If we request nonexisting route - we receive a 404 not found', () => {
        return request(server)
          .get('/nonexistingroute')
          .expect('Content-Type', "text/plain; charset=utf-8")
          .expect(404)
          .expect('Not Found')
      });
    });

 

  describe('/createUser', () => {
    describe('POST', () => {

      it('responds with error if email already exists', () => {
        return request(server)
          .post('/createUser')
          .send({ email: "testemailjest", password: "testpassword"})
          .expect({"log":"Unknown Middleware error","status":400,"message":"Error in Create User Middleware"})
          .expect(400);
      });
    });
  });

  describe('/verifyUser', () => {
    describe('POST', () => {

      it('When User is Successfully verified - Expect 201 Response and res locals obj', () => {
        return request(server)
          .post('/verifyUser')
          .send({ email: "testemailjest", password: "testpassword"})
          .expect('Content-Type', "application/json; charset=utf-8")
          .expect({
            user: { _id: 4, email: 'testemailjest', password: 'testpassword' },
            trips: []
          })
          .expect(201);
      });
    });
  });

  describe('/getTrips', () => {
    describe('POST', () => {

      it('When we make a post request with user_id it should return an array of trips', () => {
        return request(server)
          .post('/getTrips')
          .send({ userID: 2 })
          .expect('Content-Type', 'application/json; charset=utf-8')
          .expect(200)
          .expect([])
      });
    });
  });

  describe('/getLocations', () => {
    describe('POST', () => {

      it('When we send INVALID user info - response body should hold an err object with specific properties', () => {
        return request(server)
          .post('/getLocations')
          .send({ tripID: 5 })
          .expect('Content-Type', 'application/json; charset=utf-8')
          .expect([
            { _id: 1, trip_id: 5, longitude: 100, latitude: 100 },
            { _id: 2, trip_id: 5, longitude: 5000, latitude: 1000 }
          ])
      });
    });
  });
});

