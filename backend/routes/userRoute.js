var mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel.js');

const { auth, adminCheck } = require("../middleware/auth");

// check respond http://localhost:4000/user
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

// Get all user http://localhost:4000/user/get-all-user

router.get('/get-all-user', (req, res, next) => {
  User.find()
    .then((user) => { res.json(user) })
    .catch((err) => { next(err) })
});

//Update user http://localhost:4000/user/update-user/:id
router.put('/update-user/:id', (req, res, next) => {
  const id = req.params.id;
  const updates = req.body;
  User.findByIdAndUpdate(id, updates, { new: true })
    .then((user) => { res.json(user) })
    .catch((err) => { next(err) })
});


//Delete user http://localhost:4000/user/delete-user/:id
router.delete('/delete-user/:id', auth, adminCheck, (req, res, next) => {
  const id = req.params.id;
  User.findByIdAndDelete(id)
    .then((user) => { res.json(user); })
    .catch((err) => { next(err); });
});


// Create a new user 
router.post('/create-user', async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//User Register http://localhost:4000/user/register
router.post('/register', async (req, res) => {
  var { username, password } = req.body;
  try {
    // Check if the username already exists
    var user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    var salt = await bcrypt.genSalt(10);
    // Create a new user
    user = new User({
      username,
      password,
    });
    // Hash the password
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//User Login http://localhost:4000/user/login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    var user = await User.findOneAndUpdate({ username }, { new: true });
    if (user && user.enable) {
      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (!isPasswordMatch) {
        return res.status(404).json({ message: 'Invalid password' });
      }

      const payload = {
        user: {
          username: user.username,
          role: user.role
        },
      };

      jwt.sign(payload,
        'Secret',
        { expiresIn: 3600 }, (error, token) => {
          if (error) throw error;
          res.json({ token, payload })
        });

    } else {
      return res.status(404).json({ message: 'User not found' });
    }


  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//User delete all http://localhost:4000/user/delete-all
router.delete('/delete-all', async (req, res) => {
  try {
    await User.deleteMany();
    res.status(200).json({ message: 'All users deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

//http://localhost:4000/current-user
router.post('/current-user', auth, async (req, res) => {
  try {
    // model User
    // console.log("controller", req.user);
    const user = await User.findOne({ username: req.user.username })
      .select("-password")
      .exec();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
});

//http://localhost:4000/current-admin
router.post('/current-admin', auth, adminCheck, async (req, res) => {
  try {
    // model User
    // console.log("controller", req.user);
    const user = await User.findOne({ username: req.user.username })
      .select("-password")
      .exec();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error!");
  }
});

module.exports = router;
