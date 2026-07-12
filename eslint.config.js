const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  {
    ignores: [".next/**", "node_modules/**", "out/**"],
  },
  ...compat.extends("next/core-web-vitals"),
];
