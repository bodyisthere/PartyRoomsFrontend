import type { StorybookConfig } from '@storybook/react-vite';
import { loadConfigFromFile, mergeConfig } from 'vite';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    const newConfig = {
      ...config,
      define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('https://dummyjson.com'),
        __PROJECT__: JSON.stringify('frontend'),
      },
      resolve: {
        alias: {
          '@': '/src',
        },
      },
    };
    return newConfig;
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
