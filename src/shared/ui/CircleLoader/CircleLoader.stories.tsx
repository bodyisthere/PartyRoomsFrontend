import { Meta, StoryFn } from '@storybook/react';
import { CircleLoader } from './CircleLoader';

export default {
  title: 'shared/CircleLoader',
  component: CircleLoader,
} as Meta<typeof CircleLoader>;

const Template: StoryFn<typeof CircleLoader> = (args) => <CircleLoader {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  width: '60px',
  height: '60px',
};
