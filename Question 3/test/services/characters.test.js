const assert = require('assert');
const app = require('../../src/app');

describe('\'characters\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/characters');

    assert.ok(service, 'Registered the service');
  });
});
