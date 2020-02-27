const request = require('supertest');

const server = require('./server.js')

describe('server.js', () => {
    describe('GET /', () => {
        //checking server responses
        it('returns 200 OK', () => {
            return request(server)
                .get('/')
                .then(res => {
                    //expect(res.status).toBe(500)//checking for false positives
                    expect(res.status).toBe(200)
                });
        });
    });
    describe('GET /cogs', () => {
        
    })
});