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


describe('Game', () => {
    it('responds with status 200 if ok', async () => {
        const res = await request(app).get("/Game");

        expect(res.statusCode).toEqual(200);

    });
});

