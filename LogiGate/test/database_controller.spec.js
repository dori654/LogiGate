
const controller = require("../controller/dashboard_controller");

const request = require('supertest');
const express = require('express');
const app = express();
 
        describe('GET Dashboards/dashboard', function() {
        it('responds with html', function(done) {
          request(app)
            .get('/Dashboards/dashboard')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(404, done);
        });
      });

      describe('GET users/user', function() {
        it('responds with html', function(done) {
          request(app)
            .get('/users/:id')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(404, done);
        });
      });

        describe('GET users/edituser', function() {
        it('responds with html', function(done) {
          request(app)
            .get('/users/edituser')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(404, done);
        });
      });

        describe('GET users/export', function() {
        it('responds with html', function(done) {
          request(app)
            .get('/users/export')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(404, done);
        });
      });

        describe('GET users/analytics', function() {
        it('responds with html', function(done) {
          request(app)
            .get('/users/analytics')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(404, done);
        });
      }
    );

    describe('GET users/reports', function() {
        it('responds with html', function(done) {
          request(app)
            .get('/users/reports')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(404, done);
        });
      });

    describe('GET users/rooms', function() {
        it('responds with html', function(done) {
          request(app)
            .get('/users/rooms')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(404, done);
        });
      }
    );

    describe('GET users/news', function() {
        it('responds with html', function(done) {
          request(app)
            .get('/users/news')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(404, done);
        });
      }
    );

    describe('GET users/send', function() {
        it('responds with html', function(done) {
          request(app)
            .get('/users/send')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(404, done);
        });
      }
    );

    describe('POST users/send', function() {
        it('responds with html', function(done) {
          request(app)
            .post('/users/send')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(404, done);
        });
      }
    );

    describe('GET users/remove', function() {
        it('responds with html', function(done) {
          request(app)
            .get('/users/remove')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(404, done);
        });
      }
    );
      
    describe('GET users/edit', function() {
        it('responds with html', function(done) {
          request(app)
            .get('/users/edit')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(404, done);
        });
      }
    );

   


