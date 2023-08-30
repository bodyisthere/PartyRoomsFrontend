import { Meta, StoryFn } from '@storybook/react';
import { Input } from './Input';
import Addon from '../../assets/icons/EyeClose.svg';

export default {
  title: 'shared/Input',
  component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  value: 'привет!',
};

export const AddonLeft = Template.bind({});
AddonLeft.args = {
  value: 'привет!',
  addonLeft: <Addon />,
};

export const AddonRight = Template.bind({});
AddonRight.args = {
  value: 'привет!',
  addonRight: <Addon />,
};
