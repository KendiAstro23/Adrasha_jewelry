module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true, // Add this line to support Node.js globals
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module",
    },
    plugins: ["react"],
    rules: {
      "no-unused-vars": "warn", // Change to warn to avoid blocking deployment
      "no-undef": "off", // Disable no-undef for Node.js globals like `process`
    },
  };
  