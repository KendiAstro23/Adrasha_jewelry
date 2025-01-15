module.exports = {
    env: {
      browser: true, // For browser-specific globals
      es2021: true, // For modern ECMAScript features
      node: true, // Enables Node.js-specific globals
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12, // For ES2021 features
      sourceType: 'module', // Use ES modules
    },
    plugins: [
      'react',
    ],
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
    rules: {
      // Custom rules, if needed
    },
  };
  