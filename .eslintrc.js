module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: [
  '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  rules: {
    "indent": ["error", 2],
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-func-assign": "error",
    "no-redeclare": "error",
    "no-const-assign": "error",
    "no-return-assign": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-unused-expressions": "error",
  }
}
