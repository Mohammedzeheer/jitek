const jwt = require('jsonwebtoken')
require('dotenv').config()

const jwtPartner = (req, res, next) => {
  try {
      const jwttoken = req.headers.authorization;
  let token = jwttoken.replace(/"/g, '');
  if (token) {
      const User = jwt.verify(token, process.env.USER_TOKEN_SECRET);
      req.UserId = User.id
      next();
    } 
   else {
    res.status(401).json({ message: 'Token missing' });
  }
  } catch (error) {
    res.status(500).json({ message: 'Invalid token' });
  }

};

module.exports = jwtPartner;
