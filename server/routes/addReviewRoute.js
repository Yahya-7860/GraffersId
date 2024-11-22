const { handleAddReview } = require('../controller/companyReviews/addReview')
const addReviewRoute = require('express').Router()

addReviewRoute.post('/addReview', handleAddReview)

module.exports = addReviewRoute