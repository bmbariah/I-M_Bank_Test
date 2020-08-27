const assert = require('assert');
const app = require('../../src/app');

describe('\'iou\' service', () => {
  it('registered the service', () => {
    const service = app.service('iou');

    assert.ok(service, 'Registered the service');
  });
});
