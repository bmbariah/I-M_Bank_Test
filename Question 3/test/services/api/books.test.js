const assert = require('assert');
const app = require('../../../src/app');

describe('\'api/books\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/books');

    assert.ok(service, 'Registered the service');
  });
});
