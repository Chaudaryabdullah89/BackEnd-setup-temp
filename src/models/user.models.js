import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    avatar: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    watchHistory: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "video",
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    token: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);
userscheme.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
userscheme.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};
userscheme.methods.generateAccessToken = function () {
  JsonWebTokenError.sign({
    _id: this._id,
    email: this.email,
    username: this.username,
    fullname: this.fullname,
  },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN }
  );
};
userscheme.methods.generateRefreshToken = function () {
  return JsonWebTokenError.sign(
    { _id: this._id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN }
  );
};
export const user = mongoose.model("user", userSchema);
