/* eslint-env node */

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // react first
          ['^react', '^@?\\w'],

          // absolute @/
          ['^@/'],

          // relative
          ['^\\.'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',

    'react/react-in-jsx-scope': 'off',
  },
};
