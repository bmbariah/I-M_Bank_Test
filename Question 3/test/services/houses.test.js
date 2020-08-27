const assert = require('assert');
const app = require('../../src/app');

describe('\'houses\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/houses');

    assert.ok(service, 'Registered the service');
  });
});
