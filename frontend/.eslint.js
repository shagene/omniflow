// frontend/.eslintrc.js
/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "@remix-run/eslint-config/jest-testing-library",
    "plugin:import/typescript",
  ],
  plugins: ["import"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      }
    }
  },
  // Temporarily disable the import/no-unresolved rule if you need immediate relief
  // while setting up the configuration
  rules: {
    // "import/no-unresolved": "off"
  }
};