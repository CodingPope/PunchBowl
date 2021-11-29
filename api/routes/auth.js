const router = require('express').Router();
const User = require('../models/User');
var bcrypt = require('bcryptjs');

//REGISTER
router.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json('user not found');

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    console.log('jhgkgkgk', user.password);
    !validPassword && res.status(400).json('incorrect password');

    res.status(200).json('nice');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
