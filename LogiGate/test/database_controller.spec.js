const sinon = require('sinon');
const mongoose = require('mongoose');
var db = mongoose.connection;
const controller = require("../controller/dashboard_controller");
const user = require('../models/user');

// (5).should.be.exactly(5).and.be.a.Number();



// //test if imput is a string
// var str = "hello";
// str.should.be.a.String();

// //test if imput is a number
// var num = 5;
// num.should.be.a.Number();

// var assert = require('assert');

//     describe('Array', function() {
//     describe('#indexOf()', function() {
//         it('should return -1 when the value is not present', function() {
//         assert.equal([1, 2, 3].indexOf(3), 2);
//         });
//     });
//     });


//   describe('string name', function(){
//     // can nest more describe()'s here, or tests go here
//     it('should return a string', function(){
//         var name = "hello";
//         name.should.be.a.String();
//         });
//   });

//     describe('number age', function(){
//         // can nest more describe()'s here, or tests go here
//         it('should return a number', function(){
//             var age = 5;
//             age.should.be.a.Number();
//             });
//         }
//     );

//     describe('check if age is greater than 18', function(){
//         // can nest more describe()'s here, or tests go here
//         it('should return a number', function(){
//             var age = 25;
//             age.should.be.above(18);
//             });
//         }       
//     );

//     describe('boolean isAdult', function(){
//         // can nest more describe()'s here, or tests go here
//         it('should return a boolean', function(){
//             var isAdult = true;
//             isAdult.should.be.a.Boolean();
//             });
//         }
//     );

//     describe('check login', function(){
//         // can nest more describe()'s here, or tests go here
//         it('should login with rendom user', function(){
//             var username = 112233;
//             var pass = 1;
//             module.exports
//             });
//         }
//     );

//     describe('query database', function(){
//         //check if database is connected
//         it('should return true connection', function(){
           
//             db.should.be.ok;
//             });
//         }
//     );

//    describe('check is phone number is valid', function(){
//         // can nest more describe()'s here, or tests go here
//         it('should return a boolean', function(){
//             var phone = "1234567890";
//             phone.should.be.a.String();
//             });
//         }
//     );

    