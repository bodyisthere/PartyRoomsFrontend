import { Meta, StoryFn } from '@storybook/react';
import { Portal } from './Portal';

export default {
  title: 'shared/Portal',
  component: Portal,
} as Meta<typeof Portal>;

const Template: StoryFn<typeof Portal> = (args) => <Portal {...args} />;
export const Primary = Template.bind({});
Primary.args = {
};