const { handleSortByLocation } = require('../controller/companyProfile');
const sortByLocationRoute = require('express').Router();

sortByLocationRoute.get('/byLocation', handleSortByLocation);
module.exports = sortByLocationRoute;