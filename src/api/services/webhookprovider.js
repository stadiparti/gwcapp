/* eslint-disable camelcase */
const axios = require('axios');
const apiLoginKey = '7dsUK4xud42';
const transactionKey = '9Ge9m7uRL8Kt78Lm';

exports.webhookCreate = async () => {
  const fields = 'id, name, email, picture';
  const url = 'https://apitest.authorize.net/rest/v1/webhooks';
  const params = { access_token, fields };
  axios.post(url, {
	"name": "My New Webhook",
	"url": "https://myserver.com/v1/weebhook",
	"eventTypes": [
		"net.authorize.payment.authcapture.created",
		"net.authorize.customer.created",
		"net.authorize.customer.paymentProfile.created",
		"net.authorize.customer.subscription.expiring"
	],
	"status": "active"
},{ auth: {
    username: apiLoginKey,
    password: transactionKey
  }}
   )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  const {
    id, name, email, picture,
  } = response.data;
  return {
    service: 'facebook',
    picture: picture.data.url,
    id,
    name,
    email,
  };
};

exports.updateebhook = async () => {
  const url = 'https://www.googleapis.com/oauth2/v3/userinfo';
  const params = { access_token };
  const response = await axios.get(url, { params });
  const {
    sub, name, email, picture,
  } = response.data;
  return {
    service: 'google',
    picture,
    id: sub,
    name,
    email,
  };
};
