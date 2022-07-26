const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { zodiacs } = require('../data/zodiacs');

describe('zodiac routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/zodiac should return a list of 12 zodiacs', async () => {
    const res = await request(app).get('/zodiac');
    const expected = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(res.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});

it('/zodiac/:id should return detail on a specific zodiac', async () => {
  const res = await request(app).get('/zodiac/1');
  const aquarius =   { 
    'id':'1',
    'name':'aquarius',
    'dates':'Jan 21 - Feb 19',
    'symbol':'Water Bearer' 
  };
  expect(res.body).toEqual(aquarius);
});
