import { Meta, StoryFn } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  children: '321321',
};
