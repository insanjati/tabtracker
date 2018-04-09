const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    // define a schema
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$') // at least 8, max 32
      )
    }
    // use the schema above
    const {error, value} = Joi.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) { // gives us the key that failed, in this case email or password
        case 'email':
          res.status(400).send({
              error: 'You must provide a valid email address.'
          })
          break;
        case 'password':
          res.status(400).send({
              error:`The password provided failed to match the following rules:
                <br>
                1. It must contain only the following characters: lower case, upper case, numeric.
                <br>
                2. It must be at least 8 characters and not greater than 32 characters in length.

              `
          })
          break;
        default:
          res.status(400).send({
            error: 'Invalid registration information.'
          })
          break;

      }
    } else {
      // if all passed, execute next line (in route.js theres AuthController.register)
      next()
    }
  }
}