'use strict';

module.exports = function(Customer) {
  Customer.beforeRemote('create', function(ctx, user, next) {
    Customer.validatesLengthOf('fullName', {min: 6});
    console.log(ctx.methodString, 'was invoked remotely'); // customers.prototype.save was invoked remotely
    next();
  });
};
