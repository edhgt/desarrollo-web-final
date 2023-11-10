const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: String,
  googleId: { type: String, required: false, unique: true },
  displayName: { type: String, required: false },
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: false, required: true },
  password: { type: String, required: true },
  profile_picture: String,
  created_at: { type: Date, default: Date.now },
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

// Método para encriptar la contraseña antes de guardarla en la base de datos
userSchema.methods.encryptPassword = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

// Método para verificar la contraseña
userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
