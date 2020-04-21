const { validationResult } = require('express-validator');
const ErrorHandler = require('../models/http-error');

module.exports = {
  default: (req, res, next) => {
    const errors = validationResult(req);
    const errorsMsg = errors
      .array()
      .map((err) => err.msg)
      .join(', ');
    if (!errors.isEmpty()) return next(new ErrorHandler(errorsMsg, 422));
    next();
  },
  image: (req, res, next) => {
    if (!req.file) {
      return next(new ErrorHandler('No image provided', 422));
    }
    next();
  }
};
