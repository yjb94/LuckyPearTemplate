module.exports = {
  // TODO: fsd like linting
  root: true,
  extends: ['@react-native', '@feature-sliced'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  plugins: ['react-native-unistyles'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react-native-unistyles/no-unused-styles': 'warn',
    'react-native-unistyles/sort-styles': [
      'warn',
      'asc',
      { ignoreClassNames: false, ignoreStyleProperties: false },
    ],
    'import/no-internal-modules': [
      'error',
      {
        allow: ['**/ui/*', 'app/*', 'screens/*', 'entities/*', 'shared/*'],
      },
    ],
  },
};
