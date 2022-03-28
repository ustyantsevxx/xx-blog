module.exports = {
  parser: '@typescript-eslint/parser',

  root: true,

  env: {
    node: true
  },

  ignorePatterns: ['.eslintrc.js'],

  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],

  plugins: [
    'prettier',
    '@typescript-eslint/eslint-plugin',
    'simple-import-sort'
  ],

  rules: {
    // Core

    'no-console': 'warn',
    curly: 'error',

    // TS-specific

    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    // Unicorn
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/prefer-module': 'off',

    // Enhancements

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_'
      }
    ],

    'import/order': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  }
}
