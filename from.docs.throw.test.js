'use strict';

const compileAndroidCode = require('./from.docs.throw').compileAndroidCode;
const ConfigError = require('./from.docs.throw').ConfigError;

test('Compiling android throws', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(ConfigError);

  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow('You are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
});

