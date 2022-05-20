const Ticket = require('../models/ticket.model')
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true,'First name is required'],
        minlength: [3,'First name must be at least 3 characters in length'],
    },
    lastName: {
        type: String,
        required: [true,'Last name is required'],
        minlength: [3,'Last name must be at least 3 characters in length']
    },
    email: {
        type: String,
        required: [true,'Email is required'],
        unique: [true,'An account with this email address already exists'],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: 'Please enter a valid email address'
        }
    },
    password: {
        type: String,
        required: [true,'Password is required'],
        minlength: [8,'Password must be 8 characters or longer']
    },
    tickets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Coin'
        }
    ]
},{timestamps:true});

UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => {
        this._confirmPassword = value;
    });

UserSchema.pre("validate", function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Passwords must match");
    }
    next();
});

UserSchema.pre("save", function (next) {
    bcrypt
        .hash(this.password, 10)
        .then((hash) => {
        this.password = hash;
        next();
        })
        .catch((err) => {
        console.log("error saving hash");
        console.log(err);
        });
});
module.exports = mongoose.model('User',UserSchema);











// ===============Didn't Work==========

// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const UserSchema = new mongoose.Schema(
// {
//   firstName: {
//     type: String,
//     required: [true, "A First Name is Required"],
//   },
//   lastName: {
//     type: String,
//     required: [true, "A Last Name is Required"],
//   },
//   email: {
//     type: String,
//     required: [true, "An Email Address is Required"],
//     validate: {
//       validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
//       message: "Please enter a valid email",
//     },
//   },
//   password: {
//     type: String,
//     required: [true, "A Password is Required"],
//     minlength: [8, "Passwords Must be at Least 8 Characters"],
//   },
// }, 
// { timestamps: true }
// );

// UserSchema.virtual("confirmPassword")
// .get(() => this.confirmPassword)
// .set((value) => {
//   this.confirmPassword = value;
// });

// UserSchema.pre("validate", function (next) {
//   if (this.password !== this.confirmPassword) {
//     this.invalidate("confirmPassword", "Passwords must match");
//   }
//   next();
// });

// UserSchema.pre("save", function (next) { 
//     bcrypt
//     .hash(this.password, 10)
//     .then((hash) => {
//       this.password = hash;
//       next();
//     })
//     .catch(err => {
//       console.log("error saving hash");
//       console.log(err);
//     });
// });

// module.exports = mongoose.model("User", UserSchema);
