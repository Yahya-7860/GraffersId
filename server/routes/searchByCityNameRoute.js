const { handleSearchByCityName } = require('../controller/companyProfile');
const searchByCityNameRoute = require('express').Router();

searchByCityNameRoute.get('/byCityName', handleSearchByCityName);
module.exports = searchByCityNameRoute;