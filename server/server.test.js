/* eslint-disable no-undef */
/**
 * @jest-environment node
 */

const request = require('supertest');
const server = require('./server.js');

describe('Test the API routes', () => {
  test('It should respond to the GET method', async (done) => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
    done();
  });

  test('It should handle GET requests for a specific site ID', async (done) => {
    const response = await request(server).get('/api/sites/1');

    expect(response.body[0]).toHaveProperty('siteName');
    expect(response.body[0]).toHaveProperty('hostName');
    expect(response.body[0]).toHaveProperty('hostAvatar');
    expect(response.body[0]).toHaveProperty('description');
    expect(response.body[0]).toHaveProperty('country');
    expect(response.body[0]).toHaveProperty('state');
    done();
  });

  test('It should handle GET requests for list of guests who recommend a specific site', async (done) => {
    const response = await request(server).get('/api/sites/1/recommend');

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body[0]).toHaveProperty('guestName');
    expect(response.body[0]).toHaveProperty('guestAvatar');
    expect(response.body[0]).toHaveProperty('recommend');
    done();
  });
});
