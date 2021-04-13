module.exports = {
  rules: {
    'import/no-unresolved': 0,
    'import/order': 0,
    'import/extensions': [
      'error',
      'never',
      {
        svg: 'always',
        png: 'always',
        jpg: 'always',
        json: 'always',
        scss: 'always',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.ts', '**/*.test.tsx'] },
    ],
  },
}
