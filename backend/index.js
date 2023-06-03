const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./modal/UserSchema");
const mongoURL =
  "mongodb+srv://dick_walker:cwKg!PkYkagbV6Y@cluster0.o4bhezn.mongodb.net/";

app.use(express.json());
app.use(cors());
mongoose.set("strictQuery", true);

mongoose.connect(mongoURL, () => {
  console.log("chud rha hu bhai");
});

// demo testing route

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email , password);

  try {
    // Check if the email exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "Invalid email or password" });
    }

    if (password != user.password) {
      return res.status(404).json({ error: "Invalid email or password" });
    }

    // All credentials are correct
    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

// sign up route

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "Email already exists" });
    }

    // Create a new user object
    const newUser = new User({
      name,
      email,
      password,
    });

    // Save the user object to the database
    await newUser.save();

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(8080, () => {
  console.log("chal rha hu bc");
});
