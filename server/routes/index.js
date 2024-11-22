const addCompanyRoute = require("./addCompanyRoute");
const addReviewRoute = require("./addReviewRoute");
const getAllCompaniesRoute = require("./getAllCompaniesRoute");
const getReviewRoute = require("./getReviewRoute");
const searchByCityNameRoute = require("./searchByCityNameRoute");
const sortByLocationRoute = require("./sortByLocation");
const sortByNameRoute = require("./sortByName");

module.exports = { addCompanyRoute, searchByCityNameRoute, sortByNameRoute, sortByLocationRoute, addReviewRoute, getReviewRoute, getAllCompaniesRoute }