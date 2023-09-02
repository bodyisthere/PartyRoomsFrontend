import { Meta, StoryFn } from '@storybook/react';
import { AppImage } from './AppImage';
import { Skeleton } from '../Skeleton';

export default {
  title: 'shared/AppImage',
  component: AppImage,
} as Meta<typeof AppImage>;

const Template: StoryFn<typeof AppImage> = (args) => <AppImage {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
  alt: 'Girl with a camera',
  fallback: <Skeleton width={400} height={266} />,
  errorFallback: <p>fallback</p>,
  style: {
    width: '400px',
    height: 'auto',
  },
};

export const Error = Template.bind({});
Error.args = {
  fallback: <Skeleton width={400} height={266} />,
  errorFallback: <Skeleton width={400} height={266} />,
  style: {
    width: '400px',
    height: 'auto',
  },
};
