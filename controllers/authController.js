const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    const id = uuidv4();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      id,
      name,
      email,
      password: hashedPassword,
    });
    res.json({ Msg: "Registered successfully" });
  } catch (error) {
    if (error?.parent?.code == "23505") {
      res.status(404).json({ Msg: "Email already exists" });
    }
    console.log(error);
    res.status(500).json({ Msg: error });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(404).json({ Msg: "User not found!" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res
        .status(401)
        .json({ Msg: "Authentication failed! Incorrect password" });
    }
    const token = jwt.sign({ userId: user.id }, "SECRET-KEY", {
      expiresIn: "1h",
    });

    res.json({ token });
    // res.json({user, passwordMatch});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
}

module.exports = { register, login };
