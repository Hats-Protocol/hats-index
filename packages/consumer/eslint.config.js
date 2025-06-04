import tseslint from "typescript-eslint";

import baseConfig from "../../eslint.config.js";

export default tseslint.config({
  extends: [baseConfig],
  languageOptions: {
    parserOptions: {
      projectService: {
        allowDefaultProject: ["*.js"],
      },
      tsconfigRootDir: import.meta.dirname,
    },
  },
  rules: {
    "no-console": "warn",
  },
});
