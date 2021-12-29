// const { CheckLogin,} = require('/controller/database_controller.js');

const request = require('supertest');
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

const database_controller = require('../controller/database_controller');
const user = require('../models/user')
