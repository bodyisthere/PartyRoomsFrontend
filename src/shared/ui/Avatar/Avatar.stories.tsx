import { Meta, StoryFn } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
  title: 'shared/Avatar',
  component: Avatar,
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = (args) => <Avatar {...args} />;
export const Primary = Template.bind({});
Primary.args = {
};