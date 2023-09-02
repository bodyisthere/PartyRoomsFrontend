const reduxSliceLocation = '**/src/**/**/**/slice/*.ts';
const storiesLocation = '**/src/**/*.stories.{ts,tsx}';

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'scripts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-underscore-dangle': ['error', { allow: ['_inited'] }],
  },
  overrides: [
    {
      files: reduxSliceLocation,
      rules: {
        'no-param-reassign': 'off',
      },
    },
    {
      files: storiesLocation,
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'react/function-component-definition': 'off',
      },
    },
  ],
};
