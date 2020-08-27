const users = require('./users/users.service.js');
const add = require('./add/add.service.js');
const iou = require('./iou/iou.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(add);
  app.configure(iou);
};
