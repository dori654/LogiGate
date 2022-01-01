// const app = require('../../app');
const request = require('supertest');
const express = require('express');
const app = require('../../app');
const mongoose = require('mongoose');
const session = require('express-session');
jest.setTimeout(10000);


describe('/remove/:_id', () => {
    it('responds with status 200 if ok', async () => {
        const res = await request(app).get('/remove/:_id');

        expect(res.statusCode).toEqual(200);

    });
});
