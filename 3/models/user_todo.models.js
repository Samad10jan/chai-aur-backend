import mongoose from 'mongoose';

// your schema
const userSchema = new mongoose.Schema(
  {
    // direct
    // username:String,
    // email:String,
    //

    username: {
      //properties
      // validation
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // include createdAt and upadtedAt
);
// create model name User on based  of userSchema
export const User = mongoose.model('User', userSchema);
// in mongo db  "User"-> users with s
