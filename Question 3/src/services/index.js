const apiBooks = require('./api/books/books.service.js');
const characters = require('./api/characters/characters.service.js');
const houses = require('./api/houses/houses.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(apiBooks);
  app.configure(characters);
  app.configure(houses);
};
