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
          .send({ userID: 1 })
          .expect('Content-Type', 'application/json; charset=utf-8')
          .expect([{ _id: 16, user_id: 1, location: 'somewhere', date: 'today' },
          {
            _id: 17,
            user_id: 1,
            location: 'Trip 2 motha fucka',
            date: 'today'
          },
          {
            _id: 18,
            user_id: 1,
            location: 'Trip 2 never trust a hoe',
            date: 'today'
          },
          { _id: 19, user_id: 1, location: 'Trip 4', date: 'today' },
          { _id: 20, user_id: 1, location: 'Trip 5', date: 'today' },
          { _id: 21, user_id: 1, location: 'Trip 6', date: 'today' },
          { _id: 22, user_id: 1, location: 'Trip 7', date: 'today' },
          { _id: 23, user_id: 1, location: 'Trip 8', date: 'today' }])
      });
    });
  });

  // describe('/login', () => {
  //   describe('POST', () => {

  //     it('When we send INVALID user info - response body should hold an err object with specific properties', () => {
  //       return request(server)
  //         .post('/login')
  //         .send({ username: 'nonexistingusername', password: 'sess' })
  //         .expect('Content-Type', 'application/json; charset=utf-8')
  //         .expect({
  //           log: 'Unknown Middleware error',
  //           status: 400,
  //           message: "userController.verifyUser: Error: Error: It's either your password is wrong or your user name is wrong"
  //         })
  //     });
  //   });
  // });


  // describe('/new', () => {
  //   describe('POST', () => {

  //     it('When we send a unique Username with pass - it should properly create the document and send it back in JSON', () => {
  //       return request(server)
  //         .post('/new')
  //         .send({ username: 'session', password: 'session' })
  //         .expect('Content-Type', 'application/json; charset=utf-8')
  //     });
  //   });
  // });

  // describe('/new', () => {
  //   describe('POST', () => {

  //     it('When we send a Non-Unique Username we receive a not very descriptive error - with a status of 400', () => {
  //       return request(server)
  //         .post('/new')
  //         .send({ username: 'sess', password: 'session' })
  //         .expect('Content-Type', 'application/json; charset=utf-8')
  //         .expect({
  //           log: 'Unknown Middleware error',
  //           status: 400,
  //           message: 'userController.createUser: Error: ValidationError: email: Path `email` is required.'
  //         })
  //     });
  //   });
  // });


});

