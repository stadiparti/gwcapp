const express = require('express');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');
const transactionroutes = require('./transactions.route');
const webhookroutes = require('./webhook.route');


const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

router.post('/hook/:userId', (req, res) => {
    console.log("locals"+req.locals)
    console.log(req.body) // Call your action on the request here
    res.status(200).end() // Responding is important
  })

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'));

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/transactions', transactionroutes);

module.exports = router;
