import { Meta, StoryFn } from '@storybook/react';
import { Block } from './Block';

export default {
  title: 'shared/Block',
  component: Block,
} as Meta<typeof Block>;

const Template: StoryFn<typeof Block> = (args) => <Block {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  height: '500px',
  width: '600px',
  children: 'Place for all content',
};
