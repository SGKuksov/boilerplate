/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const htmlValidator = require('gulp-w3c-html-validator');
const config = require('./config');

const validate = () => {
  return (
    src('target/**/*.html')
      // .pipe(plumber(config.notify))
      .pipe(htmlValidator())
      .pipe(htmlValidator.reporter())
  );
};

exports.validate = validate;
