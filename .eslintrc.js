module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  ignorePatterns: [
    'dist',
    'node_modules',
    'coverage',
    '__snapshots__',
    'shims-vue.d.ts',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-empty-interface': ['off'],
  },
  overrides: [
    {
      files: ['*.spec.ts'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': ['off'],
      },
    },
    {
      files: ['*.ts', '*.vue'],
      excludedFiles: 'build/**/*',
      rules: {
        'no-undef': 'off',
        'no-console': ['error', { allow: ['warn', 'error'] }],
      },
    },
  ],
};
