import { Meta, StoryFn } from '@storybook/react';
import { Text } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = (args) => <Text {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  title: 'title',
};

export const SmallText = Template.bind({});
SmallText.args = {
  text: 'title',
};
