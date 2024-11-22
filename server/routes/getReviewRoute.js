const { handleGetReview } = require('../controller/companyReviews')
const getReviewRoute = require('express').Router()

getReviewRoute.get('/getReviews', handleGetReview)

module.exports = getReviewRoute