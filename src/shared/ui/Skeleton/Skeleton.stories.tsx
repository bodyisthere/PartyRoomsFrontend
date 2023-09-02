import { Meta, StoryFn } from '@storybook/react';
import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
} as Meta<typeof Skeleton>;

const Template: StoryFn<typeof Skeleton> = (args) => <Skeleton {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  borderRadius: '15px',
  width: '600px',
  height: '500px',
};
