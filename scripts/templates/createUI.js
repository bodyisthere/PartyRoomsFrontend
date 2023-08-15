const fs = require('fs/promises');
const resolveRoot = require('../helpers/resolveRoot');
const componentContent = require('../content/componentContent');
const storybookTemplate = require('../content/storyContent');
const styleContent = require('../content/styleContent');
const indexContent = require('../content/indexContent');

module.exports = async (layer, sliceName) => {
  const sharedUIPath = (...segments) => resolveRoot('src', layer, 'ui', ...segments);
  const createComponent = async () => {
    const path = sharedUIPath(sliceName, `${sliceName}.tsx`);
    try {
      await fs.writeFile(path, componentContent(sliceName));
    } catch (e) {
      throw new Error('Error when trying to create component');
    }
  };

  const createStorybook = async () => {
    const path = sharedUIPath(sliceName, `${sliceName}.stories.tsx`);
    try {
      await fs.writeFile(path, storybookTemplate(sliceName, 'shared'));
    } catch (e) {
      throw new Error('Error when trying to create storybook');
    }
  };

  const createStyle = async () => {
    const path = sharedUIPath(sliceName, `${sliceName}.module.scss`);
    try {
      await fs.writeFile(path, styleContent(sliceName));
    } catch (e) {
      throw new Error('Error when trying to create styles');
    }
  };

  const createIndex = async () => {
    const path = sharedUIPath(sliceName, 'index.ts');
    try {
      await fs.writeFile(path, indexContent(sliceName));
    } catch (e) {
      throw new Error('Error when trying to create index.ts');
    }
  };

  await createComponent();
  await createStorybook();
  await createStyle();
  await createIndex();
};
