module.exports = {
  'env': {
    'browser': true,
  },
  'extends': [
    'eslint:recommended',
    'google',
  ],
  'globals': {
  },
  'ignorePatterns': ['**/*.bundle.js', '**/*.min.js', 'node_modules/'],
  'parserOptions': {
    'ecmaVersion': 7,
    'sourceType': 'module',
  },
  'plugins': [
    'simple-import-sort',
  ],
  'rules': {
    'arrow-parens': ['error', 'always'],
    'camelcase': 'warn',
    'comma-dangle': ['warn', 'always-multiline'],
    'generator-star-spacing': 'error',
    'indent': ['error', 2],
    'jsx-quotes': ['error', 'prefer-double'],
    'max-len': [
      0,
      {
        'ignoreComments': true,
        'ignoreTrailingComments': true,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true,
        'ignorePattern': true,
      },
    ],
    'new-cap': 'warn',
    'no-alert': 'error',
    'no-console': 'warn',
    'no-invalid-this': 'error',
    'no-negated-condition': 'warn',
    'no-unused-vars': ['error', {
      'args': 'after-used',
    }],
    'object-curly-spacing': ['error', 'never'],
    'quotes': ['error', 'single'],
    'require-jsdoc': [
      'error',
      {
        'require': {
          'FunctionDeclaration': true,
        },
      },
    ],
    'simple-import-sort/imports': 'error',
  },
};
