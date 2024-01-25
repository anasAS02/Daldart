import supertest from 'supertest';
import { app } from '../index';

describe('POST /api/posts', () => {
  describe('fetchAndSavePosts', () => {
    test('should respond with a 200 status code', async () => {
      const response = await supertest(app).post('/api/posts').send({
        listing: "new"
      });

      expect(response.statusCode).toBe(200);
    });
    
    test('when listing is missing', async () => {
      const response = await supertest(app).post('/api/posts').send({});

      expect(response.statusCode).toBe(400);
    });
  });
});
