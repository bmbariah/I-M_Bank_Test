const assert = require('assert');
const app = require('../../src/app');

describe('\'add\' service', () => {
  it('registered the service', () => {
    const service = app.service('add');

    assert.ok(service, 'Registered the service');
  });
});
