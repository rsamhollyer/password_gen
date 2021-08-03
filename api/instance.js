/* eslint-disable camelcase */
const axios = require('axios');
const { url, params } = require('../config').api;

const getInstance = axios.create({
  baseURL: url,
  params,
});
module.exports = {
  getInstance,
};
