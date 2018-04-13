const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body); // catch input
      const userJson = user.toJSON();
      res.send({
        user: userJson,
        token: jwtSignUser(userJson),
      })
    } catch (err) {
      res.status(400).send({
        error: 'This email is already in use.'
      })
      // ex. email already exists
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body // grab email and password that the user passed in the body
      const user = await User.findOne({
        where: {
          email: email,
        },
      })
      if (!user) { // if user tidak ditemukan
        res.status(403).send({
          error: 'Email not found',
        });
      }
      const isPasswordValid = password === user.password;
      if (!isPasswordValid) {
        res.status(403).send({
          error: `Wrong password ${user.password}`,
        });
      }
      const userJson = user.toJSON();
      res.send({
        user: userJson,
        token: jwtSignUser(userJson),
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured when trying to log in',
      })
    }
  },
}
