'use strict';

const globby = require('globby');
const path = require('path');


const getKmlFilename = async (workDir) => {
  try {
    const pattern = path.join(workDir, '**/*.kml');
    const files = await globby(pattern);
    if (files.length > 0) {
      // Return first KML found, if there are others (improbable), ignore them
      return path.basename(files[0]);
    } else {
      throw Error(`No valid KML file in ${workDir}`);
    }
  } catch (e) {
    throw Error(e);
  }
};


module.exports = getKmlFilename;
