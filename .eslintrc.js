module.exports = {
  // TODO: fsd like linting
  root: true,
  extends: ['@react-native'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
