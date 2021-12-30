
const controller = require("../controller/rooms_controller");

const request = require('supertest');
const express = require('express');
const app = express();


describe('GET\' /rooms/create', function() {
    it('responds with html', function(done) {
        request(app)
            .get('/rooms/create')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(404, done);
    });
});

describe('GET\' /rooms/edit/:_id', function() {
    it('responds with html', function(done) {
        request(app)
            .get('/rooms/edit/:_id')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(404, done);
    });
});

describe('GET\' /rooms/remove/:_id', function() {
    it('responds with html', function(done) {
        request(app)
            .get('/rooms/remove/:_id')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(404, done);
    });
});