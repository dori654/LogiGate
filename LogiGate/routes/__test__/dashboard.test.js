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


describe('edit with valid account ', () => {
    it('responds with status 200 if ok', async () => {
        const res = await request(app).get('/Dashboards/edit/61d58c086f013cf16931eb49');

        expect(res.status).toBe(200);
    });
});




describe('enter export ', () => {
    it('should return 200', async () => {
        const res = await request(app).get('/Dashboards/export')
        expect(res.statusCode).toEqual(200);
    });
});



describe('enter non valid export', () => {
    it('should return 404', async () => {
        const res = await request(app).get('/Dashboards/export/test')
        expect(res.statusCode).toEqual(404);
    });
});

describe('enter analytics', () => {
    it('should return 200', async () => {
        const res = await request(app).get('/Dashboards/analytics')
        expect(res.statusCode).toEqual(200);
    });
});


describe('enter non valid analytics', () => {
    it('should return 404', async () => {
        const res = await request(app).get('/Dashboards/analytics/test')
        expect(res.statusCode).toEqual(404);
    });
});



describe('enter rooms', () => {
    it('should return 200', async () => {
        const res = await request(app).get('/Dashboards/rooms')
        expect(res.statusCode).toEqual(200);
    });
});


describe('enter non valid rooms', () => {
    it('should return 404', async () => {
        const res = await request(app).get('/Dashboards/rooms/test')
        expect(res.statusCode).toEqual(404);
    });
});



describe('/reports/:user_id' , () => {
    it('should return 500', async () => {
        const res = await request(app).get('/Dashboards/reports/61d58c086f013cf16931eb49')
        expect(res.statusCode).toEqual(500);
    });
});




describe('/send', () => {
    it('should return 302', async () => {
        const res = await request(app).post('/Dashboards/send')
        expect(res.statusCode).toEqual(302);
    });
});


describe('/post send_push', () => {
    it('should return 302', async () => {
        const res = await request(app).post('/Dashboards/send_push')
        expect(res.statusCode).toEqual(302);
    });
});


describe('/post non valid send_push', () => {
    it('should return 404', async () => {
        const res = await request(app).post('/Dashboards/send_push/test')
        expect(res.statusCode).toEqual(404);
    });
});





describe('/get news', () => {
    it('should return 200', async () => {
        const res = await request(app).get('/Dashboards/news')
        expect(res.statusCode).toEqual(200);
    });
});

describe('/get non valid news', () => {
    it('should return 404', async () => {
        const res = await request(app).post('/Dashboards/news')
        expect(res.statusCode).toEqual(404);
    });
});


describe('/post export_send' , () => {
    it('should return 302', async () => {
        const res = await request(app).post('/Dashboards/export_send')
        expect(res.statusCode).toEqual(302);
    });
});

describe('post non valid export_send' , () => {
    it('should return 404', async () => {
        const res = await request(app).post('/Dashboards/export_send/test')
        expect(res.statusCode).toEqual(404);
    });
});



describe('remove valid user ', () => {
    it('responds with status 302 if ok', async () => {
        const res =  await request(app).get('/Dashboards/remove/61d58c086f013cf16931eb49');
        expect(res.statusCode).toEqual(302);
    });
});

