module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/essential',
    '@vue/typescript/recommended',
    '@vue/prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  ignorePatterns: ['dist', 'docs', 'node_modules', 'coverage', '__snapshots__'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-empty-interface': ['off'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
  overrides: [
    {
      files: ['*.spec.ts'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': ['off'],
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['types.ts', 'types.internal.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['scripts/**/*.ts'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
