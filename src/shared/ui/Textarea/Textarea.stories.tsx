import { Meta, StoryFn } from '@storybook/react';
import { Textarea } from './Textarea';

export default {
  title: 'shared/Textarea',
  component: Textarea,
} as Meta<typeof Textarea>;

const Template: StoryFn<typeof Textarea> = (args) => <Textarea {...args} />;
export const Primary = Template.bind({});
Primary.args = {
};