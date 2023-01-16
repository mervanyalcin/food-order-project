const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      require: true,
      default: "",
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    phoneNumber: {
      type: String,
      require: true,
      max: 11,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 6,
      max: 16,
    },
    profilePicture: {
      type: String,
      default: "avatar.jpeg",
    },
    userRole: {
      type:  String,
      enum: ['Admin', 'Super Admin','Employe', 'User'],
      default: 'User',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);