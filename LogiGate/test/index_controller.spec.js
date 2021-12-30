const controller = require("../controller/index_controller");

const request = require('supertest');
const express = require('express');
const app = express();

describe('GET /homepage', function() {
    it('responds with html', function(done) {
        request(app)
            .get('/')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(404, done);
    });
});

describe('GET /login', function() {
    it('responds with html', function(done) {
        request(app)
            .get('/Login')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(404, done);
    });
});

describe('GET /register', function() {
    it('responds with html', function(done) {
        request(app)
            .get('/Register')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(404, done);
    });
});

describe('GET /game', function() {
    it('responds with html', function(done) {
        request(app)
            .get('/Game')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(404, done);
    });
});

describe('GET /dashboard', function() {
    it('responds with html', function(done) {
        request(app)
            .get('/Dashboard')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(404, done);
    });
});

describe('GET /users', function() {
    it('responds with html', function(done) {
        request(app)
            .get('/Users')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(404, done);
    });
});

describe('GET /chat', function() {
    it('responds with html', function(done) {
        request(app)
            .get('/Chat')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(404, done);
    });
});

describe('GET /rate', function() {
    it('responds with html', function(done) {
        request(app)
            .get('/Rate')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(404, done);
    });
});


describe('GET /logout', function() {
    it('responds with html', function(done) {
        request(app)
            .get('/Logout')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(404, done);
    });
});

describe('GET /about', function() {
    it('responds with html', function(done) {
        request(app)
            .get('/About')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(404, done);
    });
});

describe('GET /contact', function() {
    it('responds with html', function(done) {
        request(app)
            .get('/Contact')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(404, done);
    });
});