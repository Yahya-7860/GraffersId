const { handleGetAllCompanies } = require('../controller/companyProfile')
const getAllCompaniesRoute = require('express').Router()

getAllCompaniesRoute.get('/getAll', handleGetAllCompanies)

module.exports = getAllCompaniesRoute