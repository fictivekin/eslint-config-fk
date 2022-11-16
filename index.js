/* eslint sort-keys: 'error' */

module.exports = {
  'env': {
    'browser': true,
  },
  'extends': [
    'eslint:recommended',
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
    // rules are sorted alphabetically
    // enabled eslint:recommended rules are listed for reference
    // recommended rules may have other options set. See docs for details:
    // https://eslint.org/docs/latest/rules/

    'array-bracket-spacing': ['error', 'never'],
    'arrow-parens': ['error', 'always'],
    'block-spacing': ['error', 'never'],
    'brace-style': 'error',
    'camelcase': 'warn',
    'comma-dangle': ['warn', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    // 'constructor-super': 'error', // eslint:recommended
    'curly': ['error', 'multi-line'],
    'eol-last': 'error',
    // 'for-direction': 'error', // eslint:recommended
    'func-call-spacing': 'error',
    'generator-star-spacing': 'error',
    // 'getter-return': 'error', // eslint:recommended
    'guard-for-in': 'error',
    'indent': ['error', 2],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'linebreak-style': 'error',
    'max-len': [
      0,
      {
        'ignoreComments': true,
        'ignorePattern': true,
        'ignoreRegExpLiterals': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreTrailingComments': true,
        'ignoreUrls': true,
      },
    ],
    'new-cap': 'warn',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    // 'no-async-promise-executor': 'error', // eslint:recommended
    'no-caller': 'error',
    // 'no-case-declarations': 'error', // eslint:recommended
    // 'no-class-assign': 'error', // eslint:recommended
    // 'no-compare-neg-zero': 'error', // eslint:recommended
    // 'no-cond-assign': 'error', // eslint:recommended
    'no-console': 'warn',
    // 'no-const-assign': 'error', // eslint:recommended
    // 'no-constant-condition': 'error', // eslint:recommended
    // 'no-control-regex': 'error', // eslint:recommended
    // 'no-debugger': 'error', // eslint:recommended
    // 'no-delete-var': 'error', // eslint:recommended
    // 'no-dupe-args': 'error', // eslint:recommended
    // 'no-dupe-class-members': 'error', // eslint:recommended
    // 'no-dupe-else-if': 'error', // eslint:recommended
    // 'no-dupe-keys': 'error', // eslint:recommended
    // 'no-duplicate-case': 'error', // eslint:recommended
    // 'no-empty': 'error', // eslint:recommended
    // 'no-empty-character-class': 'error', // eslint:recommended
    // 'no-empty-pattern': 'error', // eslint:recommended
    // 'no-ex-assign': 'error', // eslint:recommended
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    // 'no-extra-boolean-cast': 'error', // eslint:recommended
    // 'no-extra-semi': 'error', // eslint:recommended
    // 'no-fallthrough': 'error', // eslint:recommended
    // 'no-func-assign': 'error', // eslint:recommended
    // 'no-global-assign': 'error', // eslint:recommended
    // 'no-import-assign': 'error', // eslint:recommended
    // 'no-inner-declarations': 'error', // eslint:recommended
    // 'no-invalid-regexp': 'error', // eslint:recommended
    'no-invalid-this': 'error',
    // 'no-irregular-whitespace': 'error', // eslint:recommended
    // 'no-loss-of-precision': 'error', // eslint:recommended
    // 'no-misleading-character-class': 'error', // eslint:recommended
    // 'no-mixed-spaces-and-tabs': 'error', // eslint:recommended
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['error', {max: 2}],
    'no-negated-condition': 'warn',
    'no-new-object': 'error',
    // 'no-new-symbol': 'error', // eslint:recommended
    'no-new-wrappers': 'error',
    // 'no-nonoctal-decimal-escape': 'error', // eslint:recommended
    // 'no-obj-calls': 'error', // eslint:recommended
    // 'no-octal': 'error', // eslint:recommended
    // 'no-prototype-builtins': 'error', // eslint:recommended
    // 'no-redeclare': 'error', // eslint:recommended
    // 'no-regex-spaces': 'error', // eslint:recommended
    // 'no-self-assign': 'error', // eslint:recommended
    // 'no-setter-return': 'error', // eslint:recommended
    // 'no-shadow-restricted-names': 'error', // eslint:recommended
    // 'no-sparse-arrays': 'error', // eslint:recommended
    'no-tabs': 'error',
    // 'no-this-before-super': 'error', // eslint:recommended
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    // 'no-undef': 'error', // eslint:recommended
    // 'no-unexpected-multiline': 'error', // eslint:recommended
    // 'no-unreachable': 'error', // eslint:recommended
    // 'no-unsafe-finally': 'error', // eslint:recommended
    // 'no-unsafe-negation': 'error', // eslint:recommended
    // 'no-unsafe-optional-chaining': 'error', // eslint:recommended
    // 'no-unused-labels': 'error', // eslint:recommended
    'no-unused-vars': ['error', {
      'args': 'after-used',
    }],
    // 'no-useless-backreference': 'error', // eslint:recommended
    // 'no-useless-catch': 'error', // eslint:recommended
    // 'no-useless-escape': 'error', // eslint:recommended
    'no-var': 'error',
    // 'no-with': 'error', // eslint:recommended
    'object-curly-spacing': ['error', 'never'],
    'one-var': ['error', {
      const: 'never',
      let: 'never',
      var: 'never',
    }],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'prefer-const': ['error', {destructuring: 'all'}],
    'prefer-promise-reject-errors': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'quote-props': ['error', 'consistent'],
    'quotes': ['error', 'single'],
    'require-jsdoc': [
      'error',
      {
        'require': {
          'FunctionDeclaration': true,
        },
      },
    ],
    // 'require-yield': 'error', // eslint:recommended
    'rest-spread-spacing': 'error',
    'semi': 'error',
    'semi-spacing': 'error',
    'simple-import-sort/imports': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      asyncArrow: 'always',
      named: 'never',
    }],
    'spaced-comment': ['error', 'always'],
    'switch-colon-spacing': 'error',
    // 'use-isnan': 'error', // eslint:recommended
    'valid-jsdoc': ['error', {
      prefer: {
        returns: 'return',
      },
      requireParamDescription: false,
      requireReturn: false,
      requireReturnDescription: false,
    }],
    // 'valid-typeof': 'error', // eslint:recommended
    'yield-star-spacing': ['error', 'after'],
  },
};
