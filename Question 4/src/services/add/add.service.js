// Initializes the `add` service on path `/add`
const { Add } = require('./add.class');
const hooks = require('./add.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/add', new Add(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('add');

  service.hooks(hooks);
};
