require('dotenv').config();
const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose');
const { addCompanyRoute, searchByCityNameRoute, sortByNameRoute, sortByLocationRoute, addReviewRoute, getReviewRoute, getAllCompaniesRoute } = require('./routes');

const PORT = process.env.PORT;
const DB_STRING = process.env.DB_STRING;

app.use(express.json())
app.use(cors())
app.listen(PORT, () => {
    console.log(`Server started listening at port ${PORT}`)
})

const dbConnection = async () => {
    try {
        await mongoose.connect(DB_STRING)
        console.log("Database Connected Successfully")
    } catch (error) {
        console.log("An error occured while connecting databse", error)
    }
}
dbConnection();

app.use('/', addCompanyRoute)
app.use('/', getAllCompaniesRoute)
app.use('/search', searchByCityNameRoute)
app.use('/search', sortByNameRoute)
app.use('/search', sortByLocationRoute)
app.use('/review', addReviewRoute)
app.use('/review', getReviewRoute)