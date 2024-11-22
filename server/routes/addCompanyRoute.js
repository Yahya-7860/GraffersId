const { handleAddCompany } = require('../controller/companyProfile')
const addCompanyRoute = require('express').Router()

addCompanyRoute.post('/addProfile', handleAddCompany)
module.exports = addCompanyRoute