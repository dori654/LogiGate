// const app = require('../../app');
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


describe('Register a test user ', () => {
	it('responds with status 200 if ok', async () => {
		const res = await request(app).post("/Register").send({ f_name: 'AntiParazit', email: '1123@hghh', ID: '1234', password: '456' });

		expect(res.statusCode).toEqual(200);

	});
});

describe('Login valid user', () => {
	it('responds with status 200 if ok', async () => {
		const res = await request(app).post("/Login").send({ user_id: '1234', password: '456' });

		expect(res.statusCode).toEqual(200);

	});
});


describe('Login second user ', () => {
	it('responds with status 200 if ok', async () => {
		const res = await request(app).post("/Login").send({ user_id: '99999', password: '99999' });

		expect(res.statusCode).toEqual(200);

	});
});

describe('Signoff', () => {
	it('responds with status 200 if ok', async () => {
		const res = await request(app).get("/signoff");

		expect(res.statusCode).toEqual(200);

	});
});


describe('Signoff not valid ', () => {
	it('responds with status 404 if ok', async () => {
		const res = await request(app).get("/signoff/test");

		expect(res.statusCode).toEqual(404);

	});
});

describe('Rate', () => {
	it('responds with status 200 if ok', async () => {
		const res = await request(app).get("/Rate");

		expect(res.statusCode).toEqual(200);

	});
});


describe('Rate false ', () => {
	it('responds with status 404 if ok', async () => {
		const res = await request(app).get("/Rate/test");

		expect(res.statusCode).toEqual(404);

	});
});





