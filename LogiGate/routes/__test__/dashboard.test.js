const request = require('supertest');
const express = require('express');
const app = require('../../app');
const mongoose = require('mongoose');





beforeAll(async () => {
	mongoose.connect("mongodb+srv://Team1:1234567z@team1.n8yrs.mongodb.net/LogiGate_Test?retryWrites=true&w=majority");
	var db = mongoose.connection;
	db.on("error", () => console.log("Error in Connecting to Database"));
	db.once("open", () => console.log("Connected to Database"));

});


describe('edit', () => {
    it('responds with status 200 if ok', async () => {
        const res = await request(app).get('/Dashboards/edit/61d338c61d961bdc8666645f');

        expect(res.status).toBe(200);
    });
});


describe('/export', () => {
    it('should return 200', async () => {
        const res = await request(app).get('/Dashboards/export')
        expect(res.statusCode).toEqual(200);
    });
});

describe('/analytics', () => {
    it('should return 200', async () => {
        const res = await request(app).get('/Dashboards/analytics')
        expect(res.statusCode).toEqual(200);
    });
});


describe('/rooms', () => {
    it('should return 200', async () => {
        const res = await request(app).get('/Dashboards/rooms')
        expect(res.statusCode).toEqual(200);
    });
});

describe('/reports/:user_id' , () => {
    it('should return 500', async () => {
        const res = await request(app).get('/Dashboards/reports/61d338c61d961bdc8666645f')
        expect(res.statusCode).toEqual(500);
    });
});

describe('/send', () => {
    it('should return 302', async () => {
        const res = await request(app).post('/Dashboards/send')
        expect(res.statusCode).toEqual(302);
    });
});


describe('/send_push', () => {
    it('should return 302', async () => {
        const res = await request(app).post('/Dashboards/send_push')
        expect(res.statusCode).toEqual(302);
    });
});





describe('/news', () => {
    it('should return 200', async () => {
        const res = await request(app).get('/Dashboards/news')
        expect(res.statusCode).toEqual(200);
    });
});


describe('/export_send' , () => {
    it('should return 302', async () => {
        const res = await request(app).post('/Dashboards/export_send')
        expect(res.statusCode).toEqual(302);
    });
});


describe('/remove', () => {
    it('responds with status 302 if ok', async () => {
        const res =  await request(app).get('/Dashboards/remove/61d338c61d961bdc8666645f');
        expect(res.statusCode).toEqual(302);
    });
});