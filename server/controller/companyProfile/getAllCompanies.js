const { companyModel } = require("../../model");

const handleGetAllCompanies = async (req, res) => {
    try {
        const result = await companyModel.find()
        if (result.length === 0) {
            return res.status(404).json({ message: "no result found" })
        }
        res.status(200).json({ message: "found", result })

    } catch (error) {
        res.status(500).json({ message: "server error", error })
    }
}
module.exports = { handleGetAllCompanies }