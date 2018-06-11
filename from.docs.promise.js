'use strict';

const fetchData = (action) => {
  return new Promise((resolve, reject) => ('fail' === action) ?
    reject('no peanuts, no butter either') :
    resolve('peanut butter'));
};


module.exports = fetchData;
