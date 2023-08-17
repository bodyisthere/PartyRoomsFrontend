import { Meta, StoryFn } from '@storybook/react';
import { CircleLoader } from './CircleLoader';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

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

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  width: '60px',
  height: '60px',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
