module.exports = (componentName) => (
  `import { Meta, StoryFn } from '@storybook/react';
import { ${componentName} } from './${componentName}';

export default {
  title: 'shared/${componentName}',
  component: ${componentName},
} as Meta<typeof ${componentName}>;

const Template: StoryFn<typeof ${componentName}> = (args) => <${componentName} {...args} />;
export const Primary = Template.bind({});
Primary.args = {
};`
);
