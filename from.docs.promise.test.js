'use strict';

const fetchData = require('./from.docs.promise');

test('the data is peanut butter', () => {
  expect.assertions(1);
  return fetchData('ok').then(data => {
    expect(data).toBe('peanut butter');
  });
});


test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchData('fail').catch(e => expect(e).toMatch('no peanuts, no butter either'));
});

// Or test it with try/catch

test('the data is peanut butter 2', async () => {
  expect.assertions(1);
  try {
    const result = await fetchData('ok');
    expect(result).toBe('peanut butter');
  } catch (e) {
    throw e;
  }
});

test('the fetch fail with try/catch too', async () => {
  expect.assertions(1);
  try {
    const result = await fetchData('fail');
  } catch (e) {
    expect(e).toMatch('no peanuts, no butter either');
  }
});
