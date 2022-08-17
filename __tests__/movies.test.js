const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/models');

// Dummy user for testing
const mockUser = {
  firstName: 'Test',
  lastName: 'User',
  email: 'test@example.com',
  password: '12345',
};

const registerAndLogin = async (userProps = {}) => {
  const password = userProps.password ?? mockUser.password;

  // Create an "agent" that gives us the ability
  // to store cookies between requests in a test
  const agent = request.agent(app);

  // Create a user to sign in with
  const user = await db.User.create({ ...mockUser, ...userProps });

  // ...then sign in
  const { email } = user;
  await agent.post('/api/v1/users/sessions').send({ email, password });
  return [agent, user];
};

describe('movies routes', () => {
  beforeEach(async () => {
    await db.sequelize.sync({ force: true });
    try {
      await db.Movies.bulkCreate([
        {
          title: 'Pointe Break',
          description: 'Dope as hell',
          image: 'http://someurl.com',
          releaseYear: 1995,
          genreId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Nightmare Before Christmas',
          description: 'Halloween AND Holiday!',
          image: 'http://someotherurl.com',
          releaseYear: 1991,
          genreId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    } catch (e) {
      console.log(e);
    }
  });
  afterAll(async () => {
    await db.sequelize.close();
  });

  it('#GET /api/v1/movies should return a list of movies', async () => {
    const resp = await request(app).get('/api/v1/movies');
    expect(resp.status).toBe(200);
    expect(resp.body.length).toBe(2);
  });
});
