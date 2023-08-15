const fs = require('fs/promises');
const resolveRoot = require('./resolveRoot');
const firstCharToUpperCase = require('./firstCharToUpperCase');
const createUI = require('../templates/createUI');

module.exports = async (layer, sliceName) => {
  const formattedSliceName = firstCharToUpperCase(sliceName);
  const path = resolveRoot('src', layer, layer === 'shared' ? 'ui' : '', formattedSliceName);
  try {
    await fs.mkdir(path);
  } catch (e) {
    throw new Error(
      `There is an error when creating directory for this path: ${path}`,
    );
  }

  if (layer === 'shared') {
    await createUI(layer, formattedSliceName);
  }
};
