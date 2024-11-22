const { companyModel } = require("../../model")

const handleSortByName = async (req, res) => {
    try {
        const result = await companyModel.find();
        const sortedResult = result.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
        if (sortedResult.length === 0) {
            return res.status(404).json({ message: 'empty' });
        }
        res.status(200).json({ message: "found sorted by name", sortedResult })
    } catch (error) {
        return res.status(500).json({ message: "server error", error })

    }
}

module.exports = { handleSortByName }