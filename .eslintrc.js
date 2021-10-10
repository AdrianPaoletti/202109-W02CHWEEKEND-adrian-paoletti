module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base', 'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "no-consistent-return": "off",
    "no-debugger": "off",
  },
};
