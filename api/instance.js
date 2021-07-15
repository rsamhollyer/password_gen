/* eslint-disable camelcase */
const axios = require('axios');
const { url } = require('../config').api;
const { params } = require('../config').api;

const getInstance = axios.create({
  baseURL: url,
  params,
});
module.exports = {
  getInstance,
};
