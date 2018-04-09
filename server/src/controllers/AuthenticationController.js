const {User} = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body); // catch input
      res.send(user.toJSON()); // send back this user object to client
    } catch (err) {
      res.status(400).send({
        error: 'This email is already in use.'
      })
      // ex. email already exists
    }
  }
}
