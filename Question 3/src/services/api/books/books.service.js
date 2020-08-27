// Initializes the `api/books` service on path `/api/books`
const { Books } = require('./books.class');
module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/books', new Books(options, app));
  app.service('api/books');
};
