module.exports = {
  extends: ["eslint-config-airbnb"],
  parser: "babel-eslint",
  env: {
    es6: true,
    browser: true,
  },
  rules: {
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx'] }],
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/prefer-default-export': 0,
    'react/destructuring-assignment': 0,
    'react/sort-comp': 0,
  },
};
