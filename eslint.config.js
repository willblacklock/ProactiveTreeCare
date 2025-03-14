import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: { ...globals.browser, process: true } } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    rules: {
      "react/prop-types": "off", // ✅ Disables prop-types enforcement
    },
  },
];
