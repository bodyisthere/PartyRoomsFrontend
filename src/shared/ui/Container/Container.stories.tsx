import { Meta, StoryFn } from '@storybook/react';
import { Container } from './Container';

export default {
  title: 'shared/Container',
  component: Container,
} as Meta<typeof Container>;

const Template: StoryFn<typeof Container> = (args) => <Container {...args} />;
export const Primary = Template.bind({});
Primary.args = {
};