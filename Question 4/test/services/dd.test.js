const assert = require('assert');
const app = require('../../src/app');

describe('\'dd\' service', () => {
  it('registered the service', () => {
    const service = app.service('dd');

    assert.ok(service, 'Registered the service');
  });
});
