// Initializes the `houses` service on path `/api/houses`
const { Houses } = require('./houses.class');
module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/houses', new Houses(options, app));

  // Get our initialized service so that we can register hooks
  app.service('api/houses');

};
