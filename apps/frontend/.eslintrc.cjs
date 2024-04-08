/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    project: true,
    extraFileExtensions: [".vue"],
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  ignorePatterns: [".eslintrc.cjs"],
};
