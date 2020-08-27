/* eslint-disable no-unused-vars */
const { BadRequest, Forbidden
} = require('@feathersjs/errors');

exports.Add = class Add {
  constructor (options) {
    this.options = options || {};
  }

  setup(app) {
    this.app = app;
  }

  async find (params) {
    return [];
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create (data, params) {
    const { user } = data
    if (!user || !user.name) {
      throw new BadRequest('Missing critical data');
    }

    let result = await this.app.service('users').create({
      "user": user.name,
      "owes": 0,
      "owed": 0
    }, {
      nedb: { upsert: true }
    });
    
    return result;
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    return { id };
  }
};
