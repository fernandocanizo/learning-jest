'use strict';

function ConfigError(message) {
  this.name = 'ConfigError';
  this.message = message;
  this.stack = (new Error()).stack;
}

const compileAndroidCode = () => {
  throw new ConfigError('You are using the wrong JDK');
};


module.exports = {
  compileAndroidCode,
  ConfigError,
};
