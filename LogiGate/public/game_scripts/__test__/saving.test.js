const request = require('supertest');
const express = require('express');
const Saving = require('../saving');
const { expect } = require('chai');



describe("Load",()=>{
    it('responds with status 200 if ok',async ()=>{
        const res = await request(Saving.loadFromHash).get("1");

        expect(res.statusCode).toEqual(200);
    });
});


// test('Load',()=>{
//     expect(Saving.load('str').toBe('str'))
// });