// Initializes the `iou` service on path `/iou`
const { Iou } = require('./iou.class');
const hooks = require('./iou.hooks');
const createModel = require('../../models/iou.model');


module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/iou', new Iou(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('iou');

  service.hooks(hooks);
};
