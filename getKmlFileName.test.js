'use strict';

const path = require('path');
const fs = require('fs');

const getKmlFilename = require('./getKmlFileName.js');

const createGoodFolder = () => {
  const folderPath = fs.mkdtempSync('/tmp/test-getKmlFilename-');
  const fileDescriptor = fs.openSync(path.join(folderPath, 'doc.kml'), 'w');
  fs.closeSync(fileDescriptor);
  return folderPath;
};

const createEmptyFolder = () => fs.mkdtempSync('/tmp/test-getKmlFilename-');

describe('/app/lib/getKmlFilename', () => {
  // Success tests
  test('Should return a KML filename', async () => {
    const result = await getKmlFilename(createGoodFolder());
    expect(result).toMatch(/\.kml$/);
  });

  // Failure tests
  test('Should throw if no KML files in folder', () => {
    // Expected one assertion to be called but received zero assertion calls.
    // expect.assertions(1);

    // expect(function).toThrow(undefined)
    // Received value must be a function, but instead "object" was found
    //return getKmlFilename(createEmptyFolder()).catch(e => expect(e).toThrow());

    // expect(string)[.not].toMatch(expected)
    // string value must be a string.
    // Received:
    // object: [Error: No valid KML file in /tmp/test-getKmlFilename-j2XxQ4]

    return getKmlFilename(createEmptyFolder()).catch(e => expect(e).toMatch('No valid KML file in'));
  });

  test('Should throw if no KML files in folder - try/catch version', async () => {
    // Expected one assertion to be called but received zero assertion calls.
    // expect.assertions(1);

    try {
      const result = await getKmlFilename(createEmptyFolder());
    } catch (e) {
      // Received value must be a function, but instead "object" was found
      //expect(e).toThrow();

      // expect(string)[.not].toMatch(expected)
      // string value must be a string.
      // Received:
      // object: [Error: No valid KML file in /tmp/test-getKmlFilename-3JOUAX]
      expect(e).toMatch('No valid KML file in');
    }
  });

});
