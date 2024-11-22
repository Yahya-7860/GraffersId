const { reviewModel } = require("../../model");

const handleAddReview = async (req, res) => {
    const { name, subject, description, companyId, rating } = req.body;

    try {
        const result = await reviewModel.create({ companyId, name, subject, description, rating })
        if (!result) {
            return res.status(404).json({ message: "can't create review" })
        }
        res.status(200).json({ message: "review created", result })
    } catch (error) {
        res.status(500).json({ message: "server error", error })
    }
}

module.exports = { handleAddReview }