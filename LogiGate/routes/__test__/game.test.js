const request = require('supertest');
const express = require('express');
const app = require('../../app');
const mongoose = require('mongoose');
const session = require('express-session');
jest.setTimeout(10000);


var mockApp = express();
mockApp.use(session);
mockApp.all('*', function (req, res, next) {
    // authenticated(req, res, next);
    //OR
    req.session.username = 'mock uid';
    next();
});
mockApp.use(app);


describe('Game with 200', () => {
    it('responds with status 200 if ok', async () => {
        const res = await request(app).get("/Game");

        expect(res.statusCode).toEqual(200);

    });
});


describe('Game.test with 404', () => {
    it('responds with status 404 if ok', async () => {
        const res = await request(app).get("/Game/test");

        expect(res.statusCode).toEqual(404);

    });
});



describe('Rate 200', () => {
    it('responds with status 200 if ok', async () => {
        const res = await request(app).get("/Rate");

        expect(res.statusCode).toEqual(200);

    });
});



describe('Rate.test 404', () => {
    it('responds with status 404 if ok', async () => {
        const res = await request(app).get("/Rate/test");

        expect(res.statusCode).toEqual(404);

    });
});
