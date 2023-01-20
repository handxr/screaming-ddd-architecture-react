module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'simple-import-sort'],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@/features/*/*'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': ['off'],
    'react/prop-types': 'off',
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.ts', '**/*.tsx', '**/*.jsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Imports starting with react/next/libs
              ['^react$', '^next', '^[a-z]'],
              // Import starting with @
              ['^@'],
              // Imports starting with ...
              [
                '^lib',
                '^data',
                '^services',
                '^hooks',
                '^schemas',
                '^utils',
                '^pages',
                '^components',
                '^assets',
              ],
              // Imports starting with `../`
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Imports starting with `./`
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports
              ['^.+\\.s?css$'],
              // Side effect imports
              ['^\\u0000'],
            ],
          },
        ],
      },
    },
  ],
};
