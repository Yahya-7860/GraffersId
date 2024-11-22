const { handleSortByName } = require('../controller/companyProfile');
const sortByNameRoute = require('express').Router();

sortByNameRoute.get('/byName', handleSortByName);
module.exports = sortByNameRoute;