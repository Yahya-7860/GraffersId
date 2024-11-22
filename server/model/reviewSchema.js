const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    companyId: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
    }
}, { timestamps: true })

reviewSchema.pre('save', function (next) {
    this.name = this.name.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    next();
})

const reviewModel = mongoose.model('Reviews', reviewSchema)

module.exports = reviewModel