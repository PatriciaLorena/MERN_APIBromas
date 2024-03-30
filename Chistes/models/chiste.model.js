const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const ChisteSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: (true,"nombre es requerido"),
        trim: true,
        unique:true,
        minlength: [10, "el nombre no puede tener menos de 10 caracteres"],
    },
    punchline:{
        type: String,
        required: true,
        minlength: [3, "el nombre no puede tener menos de 3 caracteres"],
    }
},{
    timestamps:true
});

ChisteSchema.plugin(uniqueValidator);

const ChisteModel = mongoose.model("Chiste", ChisteSchema);

module.exports = ChisteModel;