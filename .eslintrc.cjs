module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.app.json',
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error', 'debug', 'info'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'default',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'variableLike',
        leadingUnderscore: 'allow',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'memberLike',
        format: ['camelCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'variable',
        leadingUnderscore: 'allow',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'variable',
        types: ['boolean', 'array'],
        format: ['camelCase'],
      },
      {
        selector: 'variable',
        types: ['string', 'number'],
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'property',
        leadingUnderscore: 'allow',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'objectLiteralProperty',
        leadingUnderscore: 'allow',
        format: null,
      },
      {
        selector: 'accessor',
        leadingUnderscore: 'allow',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
    ],
  },
};
