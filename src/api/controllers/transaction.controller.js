const httpStatus = require('http-status');
const { omit } = require('lodash');
const User = require('../models/user.model');
const  {getTransactionList,getUnsettledTransactionList,webhookCreate} = require('../middlewares/getunsetledtransactionslist');

/**
 * Load user and append to req.
 * @public
 */
exports.load = async (req, res, next, id) => {
  try {
    const user = await User.get(id);
    req.locals = { user };
    return next();
  } catch (error) {
    return next(error);
  }
};



/**
 * Get user list
 * @public
 */
exports.list = async (req, res, next) => {
  try {
    const users = await User.list(req.query);
    console.log("calling anet");
    const result= {};
    const userData = await webhookCreate();
    
    getUnsettledTransactionList(function(response) {
        // logic goes here
        this.result = response;
        console.log("completed the call to anet" + JSON.stringify(this.result, null, 2));
    const transformedUsers = users.map((user) => user.transform());
    res.json(this.result);
    })
    console.log("completed the call to anet");
    const transformedUsers = users.map((user) => user.transform());
   
  } catch (error) {
    next(error);
  }
};
