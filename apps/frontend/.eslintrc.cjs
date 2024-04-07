/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/library.js"],
  parser: "vue-eslint-parser",
  // parserOptions: {
  //   project: true,
  // },
  parserOptions: {
    project: true,
    extraFileExtensions: [".vue"],
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
};
