
const request = require('supertest');
const express = require('express');
const app = require('../../app');
const mongoose = require('mongoose');
const session = require('express-session');
jest.setTimeout(10000);



describe('create', () => {
    it('responds with status 404 if ok', async () => {
        const res = await request(app).post("/room/create").send({ 
            
            name: 'test',
            users: ['test'],
            rating: 0,
            feedback: ['test'],
            code: ""
    
        });

        expect(res.statusCode).toEqual(404);

    });
});


describe('edit with non valid account ', () => {
    it('responds with status 404 if ok', async () => {
        const res = await request(app).get('/room/edit/5e9b3e9b3**test**9b3e9b3e9b');

        expect(res.status).toBe(404);
    });
});

describe('edit', () => {
    it('responds with status 404 if ok', async () => {
        const res = await request(app).post("/room/edit/5e9b3e9b3e9b3e9b3e9b3e9b").send({ 
        
            code: ""

        });
        if (res.statusCode) {
            expect(res.statusCode).toEqual(404);
        }

    });
});



describe('remove', () => {
    it('responds with status 404 if ok', async () => {
        const res = await request(app).get("/remove/5e9b3e9b3e9b3e9b3e9b3e9b");
        if (res.statusCode) {
            expect(res.statusCode).toEqual(404);
        }

    });
});