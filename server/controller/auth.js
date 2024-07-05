import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

//REGISTER
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be 6 character or more",
      });
    }

    const emailLowercase = email.toLowerCase();
    const exitedUser = await User.findOne({ email: emailLowercase });

    if (exitedUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exited" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      firstName,
      lastName,
      email: emailLowercase,
      password: hashedPassword,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });

    const { id } = newUser;
    res.status(201).json({ result: { id, firstName, lastName, email } });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

//LOG IN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
