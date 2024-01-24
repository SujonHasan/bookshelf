const Users = require("./userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    console.log("email = ", email);

    const user = await Users.findOne({ email }).exec();

    if (user) return res.status(400).json({ error: "User Already Registerd" });

    if (password.length < 6 || confirmPassword < 6)
      return res
        .status(400)
        .json({ error: "Password must be at least 6 character" });

    if (password !== confirmPassword)
      return res.status(400).json({ error: "Passwords don't Match" });

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new Users({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });

    try {
      await newUser.save();
      res.status(201).json({ user: newUser });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email: email }).exec();

    let cmpPassword;

    if (user) {
      cmpPassword = await bcrypt.compare(password, user.password);
    }

    if (!user || !cmpPassword)
      return res.status(400).json({ error: "Invalid credential" });

    const token = jwt.sign(
      {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3m", issuer: user.email }
    );

    res.cookie("access_token", token, {
      httpOnly: true,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

module.exports = { createUser, login };
