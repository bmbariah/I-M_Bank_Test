const { disallow, iff } = require('feathers-hooks-common')

function multipleGroupByArray(dataArray, groupPropertyArray) {
  const groups = {};
  dataArray.forEach(item => {
    const group = JSON.stringify(groupPropertyArray(item));
    groups[group] = groups[group] || [];
    groups[group].push(item);
  });
  return Object.keys(groups).map(function (group) {
    return groups[group];
  });
}

module.exports = {

  before: {
    all: [],
    find: [],
    get: [],
    create: [disallow()],
    update: [disallow()],
    patch: [disallow()],
    remove: []
  },

  after: {
    all: [],
    find: [async context => {
      const { data } = context.result;
  
      if (Array.isArray(data)) {

        let i = 0;
        await Promise.all(data.map(async current =>  {
          //find who this user owes
          if(current.owes > 0) {

            let res = await context.app.service('iou').find({
              query: {
                borrower: current.user
              }
            });

            console.log(res.data);

            if (res.data != undefined || res.data.length > 0) {

              const result = Object.values(res.data.reduce((r, o) => (r[o.borrower]
                ? (r[o.borrower].amount += o.amount)
                : (r[o.borrower] = { ...o }), r), {}));

                console.log('Borrower:' + current.user);
                console.log(result);
                let person = result[0].lender
                data[i].owes = {
                  [person]: result[0].amount
                }
                i++;
            }

          }


        }));
      }

    }
    ],
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
