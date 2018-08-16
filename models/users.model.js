/* const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
   user_id : {
        type : String,
        required : [true, "User ID is required"],
        unique : [true, "User ID already exist"],
    },
    username: {
        type: String,a
        required: [true, "username must be provided"],
        unique: [true, "username already exist"]
    },
    fullname: {
        type: String,
        required: [true, "username must be provided"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    phone: {
        type: String,
        required: [true, "phone_number is required"]
    },
    email: {
        type: String,
        required: [true, "email address is required"],
        unique: [true, "email address already exist"]
    }
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
 */