
const app = require("../../app");
const request = require('supertest');
const express = require('express');
const controller = require("../../controller/database_controller");


describe('Register',() => {
	it('responds with status 201 if ok', async () => {
	const res = await request(app).post("/Register").send({ email: '123@1',	user_id: '546',password: '456' });

	expect(res.statusCode).toEqual(201);

	});
});



// test("GET /posts", async () => {
// 	const post = await Post.create({
// 		title: "Post 1",
// 		content: "Lorem ipsum",
// 	})

// 	await supertest(app)
// 		.get("/Dashboards/dashboard")
// 		.expect(200)
// 		.then((response) => {
// 			// Check the response type and length
// 			expect(Array.isArray(response.body)).toBeTruthy()
// 			expect(response.body.length).toEqual(1)

// 			// Check the response data
// 			expect(response.body[0]._id).toBe(post.id)
// 			expect(response.body[0].title).toBe(post.title)
// 			expect(response.body[0].content).toBe(post.content)
// 		})
// })


















// describe('GET /homepage', function() {
//     it('responds with html', function(done) {
//         request(app)
//             .get('/')
//             .set('Accept', 'text/html')
//             .expect('Content-Type', /html/)
//             .expect(404, done);
//     });
// });

// describe('GET /login', function() {
//     it('responds with html', function(done) {
//         request(app)
//             .get('/Login')
//             .set('Accept', 'text/html')
//             .expect('Content-Type', /html/)
//             .expect(404, done);
//     });
// });

// describe('GET /register', function() {
//     it('responds with html', function(done) {
//         request(app)
//             .get('/Register')
//             .set('Accept', 'text/html')
//             .expect('Content-Type', /html/)
//             .expect(404, done);
//     });
// });

// describe('GET /game', function() {
//     it('responds with html', function(done) {
//         request(app)
//             .get('/Game')
//             .set('Accept', 'text/html')
//             .expect('Content-Type', /html/)
//             .expect(404, done);
//     });
// });

// describe('GET /dashboard', function() {
//     it('responds with html', function(done) {
//         request(app)
//             .get('/Dashboard')
//             .set('Accept', 'text/html')
//             .expect('Content-Type', /html/)
//             .expect(404, done);
//     });
// });

// describe('GET /users', function() {
//     it('responds with html', function(done) {
//         request(app)
//             .get('/Users')
//             .set('Accept', 'text/html')
//             .expect('Content-Type', /html/)
//             .expect(404, done);
//     });
// });

// describe('GET /chat', function() {
//     it('responds with html', function(done) {
//         request(app)
//             .get('/Chat')
//             .set('Accept', 'text/html')
//             .expect('Content-Type', /html/)
//             .expect(404, done);
//     });
// });

// describe('GET /rate', function() {
//     it('responds with html', function(done) {
//         request(app)
//             .get('/Rate')
//             .set('Accept', 'text/html')
//             .expect('Content-Type', /html/)
//             .expect(404, done);
//     });
// });


// describe('GET /logout', function() {
//     it('responds with html', function(done) {
//         request(app)
//             .get('/Logout')
//             .set('Accept', 'text/html')
//             .expect('Content-Type', /html/)
//             .expect(404, done);
//     });
// });

// describe('GET /about', function() {
//     it('responds with html', function(done) {
//         request(app)
//             .get('/About')
//             .set('Accept', 'text/html')
//             .expect('Content-Type', /html/)
//             .expect(404, done);
//     });
// });

// describe('GET /contact', function() {
//     it('responds with html', function(done) {
//         request(app)
//             .get('/Contact')
//             .set('Accept', 'text/html')
//             .expect('Content-Type', /html/)
//             .expect(404, done);
//     });
// });


