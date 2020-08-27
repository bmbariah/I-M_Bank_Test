// Initializes the `characters` service on path `/api/characters`
const { Characters } = require('./characters.class');
module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/characters', new Characters(options, app));

  // Get our initialized service so that we can register hooks
  app.service('api/characters');
};
