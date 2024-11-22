const { companyModel } = require("../../model")

const handleSortByLocation = async (req, res) => {
    try {
        const result = await companyModel.find();
        const SortedResult = result.sort(function (a, b) {
            if (a.city < b.city) {
                return -1;
            }
            if (a.city > b.city) {
                return 1;
            }
            return 0;
        })
        if (SortedResult.length === 0) {
            return res.status(404).json({ message: "empty" })
        }
        res.status(200).json({ SortedResult })
    } catch (error) {

    }
}

module.exports = { handleSortByLocation }