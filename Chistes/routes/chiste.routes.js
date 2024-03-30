const express = require("express");

const { createNewChiste,
    getAllChistes,
    getOneChisteById,
    updateOneChisteById,
    deleteOneChisteById,
    deleteAllChiste
} = require("../controllers/chiste.controller");

const ChisteRouter = express.Router();

//esto parte de la ruta base api/users
ChisteRouter.get("/", getAllChistes);
ChisteRouter.get("/:id",getOneChisteById);
ChisteRouter.post("/", createNewChiste);
ChisteRouter.put("/:id", updateOneChisteById);
ChisteRouter.delete("/:id", deleteOneChisteById);
ChisteRouter.delete("/", deleteAllChiste);

module.exports = ChisteRouter;