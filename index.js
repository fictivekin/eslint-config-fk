module.exports = {
  "extends": [
    "eslint:recommended",
    "google"
  ],
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module"
  },
  "ignorePatterns": ["**/*.bundle.js", "**/*.min.js", "node_modules/"],
  "rules": {
    "arrow-parens": ["error", "always"],
    "camelcase": "warn",
    "comma-dangle": ["warn", "always-multiline"],
    "generator-star-spacing": "error",
    "indent": ["error", 2],
    "jsx-quotes": ["error", "prefer-double"],
    "max-len": [
      0,
      {
        "ignoreComments": true,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true,
        "ignorePattern": true
      }
    ],
    "new-cap": "warn",
    "no-alert": "error",
    "no-console": "warn",
    "no-invalid-this": "error",
    "no-negated-condition": "warn",
    "no-unused-vars": [ "error", {
      "args": "after-used"
    } ],
    "object-curly-spacing": ["error", "never"],
    "quotes": ["error", "single"],
    "require-jsdoc": [
      "error",
      {
        "require": {
          "FunctionDeclaration": true
        }
      }
    ],
    "simple-import-sort/imports": "error",
  },
  "globals": {
    "__DEV__": false,
    "alert": false,
    "describe": false,
    "document": false,
    "it": false,
    "expect": false,
    "navigator": false,
    "FormData": false,
    "window": false
  },
  "plugins": ["simple-import-sort"],
};
