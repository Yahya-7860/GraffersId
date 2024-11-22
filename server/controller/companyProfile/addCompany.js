const { companyModel } = require("../../model");

const handleAddCompany = async (req, res) => {
    const { name, location, foundDate, city } = req.body;

    try {
        const addedComapny = await companyModel.create({ name, location, foundDate, city })
        if (!addedComapny) {
            return res.status(400).json({ message: 'unable to create profile' })
        }
        res.status(200).json({ message: 'profile created', addedComapny })

    } catch (error) {
        if (error.code === 11000) {
            return res.status(401).json({ message: 'exist' })
        }
        res.status(500).json({ message: 'server error', error })

    }
}

module.exports = { handleAddCompany }