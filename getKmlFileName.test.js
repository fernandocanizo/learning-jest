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


describe('/app/lib/getKmlFilename', () => {
  // Success tests
  test('Should return a KML filename', async () => {
    const result = await getKmlFilename(createGoodFolder());
    expect(result).toMatch(/\.kml$/);
  });
});
