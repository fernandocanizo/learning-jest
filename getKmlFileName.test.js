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
    expect.assertions(1);
    return expect(getKmlFilename(createEmptyFolder())).rejects.toThrow(/No valid KML file in/);
  });

  // same test as before
  test('Should throw if no KML files in folder - async/await version', async () => {
    expect.assertions(1);
    await expect(getKmlFilename(createEmptyFolder())).rejects.toThrow(/No valid KML file in/);
  });

});
