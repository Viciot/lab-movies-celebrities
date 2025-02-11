//  Add your code here
const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const celebritySchema = new Schema(
    {
        name: {type: String, required: true, unique: true},
        occupation: {type: String, required: true},
        catchPhrase: {type: String, required: true}
    }
)

const Celebrity = model("Celebrity", celebritySchema);
module.exports = Celebrity;
