// const Promise = require('bluebird') // Promise need library?
// const bcrypt = Promise.promisifyAll(require('bcrypt'))
// const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

// function hashPassword (user, options) {
//   const SALT_FACTOR = 8;  
//   if (!user.changed('password')) {
//     return;
//   }
//   return bcrypt
//     .genSaltAsync(SALT_FACTOR)
//     .then(salt => bcrypt.hashAsync(user.password, salt, null))
//     .then(hash => {
//       user.setDataValue('password', hash)
//     })
// }

module.exports = (sequelize, DataTypes) => 
  sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })
// {
//   const User = sequelize.define('User', { // assign ke variable User agar bisa diakses
//     email: {
//       type: DataTypes.STRING,
//       unique: true,
//     },
//     password: DataTypes.STRING,
//   }, {
//     hooks: {
//       beforeCreate: hashPassword, // all this 'before' ini scriptnya dari mana sih? SEQUELIZE
//       beforeUpdate: hashPassword,
//       beforeSave: hashPassword
//     }
//   })
//   User.prototype.comparePassword = function (password) {
//     return bcrypt.compareAsync(password, this.password);
//   }
//   return User;
// }
  