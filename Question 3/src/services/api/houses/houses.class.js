/* eslint-disable no-unused-vars */
const axios = require('axios');
const { BadRequest, Forbidden
} = require('@feathersjs/errors');

exports.Houses = class Houses {
  constructor (options) {
    this.options = options || {};
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async find(params) {

    try {
      
      var config = {
        method: 'get',
        url: 'https://anapioficeandfire.com/api/houses',
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const { data, status } = await axios(config);
      if (data) {
        return data
      }
      throw new BadRequest('Something went wrong! : ' + data);

    } catch (error) {
      throw new BadRequest('Something went wrong!' + error);
    }

  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
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
