// const app = require('../../app');
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

// beforeAll(async () => {
//     mongoose.connect("mongodb+srv://Team1:1234567z@team1.n8yrs.mongodb.net/LogiGate?retryWrites=true&w=majority");
//     var db = mongoose.connection;
//     db.on("error", () => console.log("Error in Connecting to Database"));
//     db.once("open", () => console.log("Connected to Database"));
// });

describe('/', () => {
    it('responds with status 200 if ok', async () => {
        // const res = await request(mockApp).post("/Login").send({ ID: '444', password: '123' });

        before((req) => {
            req.session.username = 'mock uid';
        });
        res = await request(app).get("/");

        expect(res.statusCode).toEqual(200);

    });
});


describe('/Game', () => {
    it('responds with status 200 if ok', async () => {
        const res = await request(app).get("/Game");

        expect(res.statusCode).toEqual(200);

    });
});


describe('/Rate', () => {
    it('responds with status 200 if ok', async () => {
        const res = await request(app).get("/Rate");

        expect(res.statusCode).toEqual(200);

    });
}
);


describe('/Tutorial', () => {
    it('responds with status 200 if ok', async () => {
        const res = await request(app).get("/Tutorial");

        expect(res.statusCode).toEqual(200);

    });
}
);

describe('/Chat', () => {
    it('responds with status 200 if ok', async () => {
        const res = await request(app).get("/Chat");

        expect(res.statusCode).toEqual(200);

    });
}
);

describe('/Login', () => {
    it('responds with status 200 if ok', async () => {
        const res = await request(app).get("/Login");

        expect(res.statusCode).toEqual(200);

    });
}
);


