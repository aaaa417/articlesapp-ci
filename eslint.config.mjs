import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.jest // Ceci indique au linter que Jest est autorisé
      }
    }
  },
  pluginJs.configs.recommended,
];