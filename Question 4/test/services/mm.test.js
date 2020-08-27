const assert = require('assert');
const app = require('../../src/app');

describe('\'mm\' service', () => {
  it('registered the service', () => {
    const service = app.service('mm');

    assert.ok(service, 'Registered the service');
  });
});
