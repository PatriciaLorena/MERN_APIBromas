const ChisteModel = require("../models/chiste.model");

module.exports = {
    getAllChistes: (req, res) => {
        ChisteModel.find()
            .then((allChistes) => res.json({ chistes: allChistes }))
            .catch((err) =>
                res.json({ message: "something went wrong", error: err })
            );
    },
    createNewChiste: (req, res) => {
        ChisteModel.create(req.body)
        .then((newlyCreatedChiste) => res.json({ chistes: newlyCreatedChiste }))
            .catch((err) =>
                res.json({ message: "something went wrong", error: err })
            );
    },
    getOneChisteById: (req, res) => {
        ChisteModel.findOne({ _id: req.params.id })
            .then((oneSingleChistes) => res.json({ chistes: oneSingleChistes }))
            .catch((err) =>
                res.json({ message: "something went wrong", error: err })
            );
    },
    updateOneChisteById: (req, res) => {
        ChisteModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true})
            .then((updatedChiste) => res.json({ chistes: updatedChiste }))
            .catch((err) =>
                res.json({ message: "something went wrong", error: err })
            );
    },
    deleteOneChisteById: (req, res) => {
        ChisteModel.deleteOne({ _id: req.params.id })
            .then((result) => res.json({ chistes: result }))
            .catch((err) =>
                res.json({ message: "something went wrong", error: err })
            );
    },
    deleteAllChiste: (req, res) => {
        ChisteModel.deleteMany({})
            .then((result) => res.json({ chistes: result }))
            .catch((err) =>
                res.json({ message: "something went wrong", error: err })
            );
    }
}