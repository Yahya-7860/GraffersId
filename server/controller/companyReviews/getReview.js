const { reviewModel } = require("../../model")


const handleGetReview = async (req, res) => {
    const { id } = req.query

    try {
        const result = await reviewModel.find({ companyId: id })
        if (!result) {
            return res.status(404).json({ message: "not found", result })
        }
        res.status(200).json({ message: "found reviews", result })
    } catch (error) {
        res.status(500).json({ message: "server error", error })
    }
}

module.exports = { handleGetReview }