const { BadRequest, Forbidden
} = require('@feathersjs/errors');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      async context => {
        
        const { data } = context;

        if (!data.lender || !data.borrower || !data.amount) {
          throw new BadRequest('Missing critical data. Request must include lender, borrower & amount');
        }
        
        //check if lender exist
        let res = await context.app.service('users').find({ query: {
            user: data.lender
          }
        });

        if (res.data === undefined || res.data.length == 0){
          throw new BadRequest('No such lender exists. Create users first before adding iou');
        }
        
        //check if borrower exist
        let resB = await context.app.service('users').find({
          query: {
            user: data.borrower
          }
        });

        if (resB.data === undefined || resB.data.length == 0) {
          throw new BadRequest('No such borrower exists. Create user first before adding iou');
        }

        //Both users exist..so we proceed
        console.log(res.data);
        console.log(resB.data);

        //Update Lender owed
        let lender = res.data[0]
        await context.app.service('users').update(lender._id, { $set: { owed: lender.owed + parseFloat(data.amount) }});

        //Update Borrower owed
        let borrower = resB.data[0]
        await context.app.service('users').update(borrower._id, { $set: { owes: borrower.owes + parseFloat(data.amount) }});

      }
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
