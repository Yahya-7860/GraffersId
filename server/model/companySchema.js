const mongoose = require('mongoose')

const companySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    location: {
        type: String,
        required: true,
    },
    foundDate: {
        type: String,
        required: true
    },
    city: {
        type: String
    }
})

companySchema.pre('save', function (next) {
    this.name = this.name.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    this.location = this.location.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    this.city = this.city.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

    next();
})

const companyModel = mongoose.model('CompanyProfile', companySchema);
module.exports = companyModel;