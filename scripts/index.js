const createTemplate = require('./helpers/createTemplate');

const layer = process.argv[2];
const sliceName = process.argv[3];
const layers = ['features', 'entities', 'pages', 'shared'];

if (!layer || !layers.includes(layer)) {
  throw new Error('Specify layer');
}

if (!layer.includes(layer)) {
  throw new Error(`You should choose layer from this list: ${layers.join('')}`);
}

if (!sliceName) {
  throw new Error('Specify slice name');
}

createTemplate(layer, sliceName);
