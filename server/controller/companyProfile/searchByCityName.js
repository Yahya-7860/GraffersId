const { companyModel } = require("../../model");

const handleSearchByCityName = async (req, res) => {
    const { city } = req.body;
    const UpperCaseCity = city.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

    try {
        const result = await companyModel.find({ city: UpperCaseCity })
        if (result.length === 0) {
            return res.status(404).json({ message: "no result found" })
        }
        res.status(200).json({ message: "found", result })

    } catch (error) {
        res.status(500).json({ message: "server error", error })
    }
}
module.exports = { handleSearchByCityName }