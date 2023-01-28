module.exports = {
  extends: [
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  env: {
      browser: true,
      es6: true,
      jest: true,
  },
  globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaFeatures: {
          jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
      project: './tsconfig.json',
  },
  rules: {
      'linebreak-style': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/return-await': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'import/no-named-as-default': 0,
      'import/no-cycle': 'off',
      'import/prefer-default-export': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'import/named': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/default-param-last': 'off',

  },
}
