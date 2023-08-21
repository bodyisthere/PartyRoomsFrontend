import { Meta, StoryFn } from '@storybook/react';
import { Icon } from './Icon';

export default {
  title: 'shared/Icon',
  component: Icon,
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;
export const Primary = Template.bind({});
Primary.args = {
};