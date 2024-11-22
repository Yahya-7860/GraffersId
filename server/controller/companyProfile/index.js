const { handleAddCompany } = require("./addCompany");
const { handleGetAllCompanies } = require("./getAllCompanies");
const { handleSearchByCityName } = require("./searchByCityName");
const { handleSortByLocation } = require("./sortByLocation");
const { handleSortByName } = require("./sortByName");

module.exports = { handleAddCompany, handleSearchByCityName, handleSortByName, handleSortByLocation, handleGetAllCompanies }