import { Meta, StoryFn } from '@storybook/react';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;
export const Primary = Template.bind({});
Primary.args = {
};