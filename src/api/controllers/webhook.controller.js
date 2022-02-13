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
exports.hook = async (req, res, next) => {
  try {
   
    console.log("calling anet");
    console.log("locals"+req.params['userId'])
    console.log(req.body) // Call your action on the request here
    res.status(200).end() // Responding is importants
   
  } catch (error) {
    next(error);
  }
};
