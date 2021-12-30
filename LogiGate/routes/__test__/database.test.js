// const app = require('../../app');
const request = require('supertest');
const express = require('express');
const app = require('../../app');
const mongoose = require('mongoose');



beforeAll(async () => {
	mongoose.connect("mongodb+srv://Team1:1234567z@team1.n8yrs.mongodb.net/LogiGate?retryWrites=true&w=majority");
	var db = mongoose.connection;
	db.on("error", () => console.log("Error in Connecting to Database"));
	db.once("open", () => console.log("Connected to Database"));

});


describe('Register', () => {
	it('responds with status 200 if ok', async () => {
		const res = await request(app).post("/Register").send({ name: 'AntiParazi', email: '123@hghh', user_id: '546', password: '456' });

		expect(res.statusCode).toEqual(200);

	});
});

describe('Login', () => {
	it('responds with status 200 if ok', async () => {
		const res = await request(app).post("/Login").send({ user_id: '546', password: '456' });

		expect(res.statusCode).toEqual(200);

	});
});

describe('Signoff', () => {
	it('responds with status 200 if ok', async () => {
		const res = await request(app).get("/signoff");

		expect(res.statusCode).toEqual(200);

	});
});

describe('Rate', () => {
	it('responds with status 200 if ok', async () => {
		const res = await request(app).get("/Rate");

		expect(res.statusCode).toEqual(200);

	});
});







