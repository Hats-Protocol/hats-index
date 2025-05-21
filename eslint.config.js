// import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.js', 'ponder.config.ts', 'ponder.schema.ts'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-floating-promises': 'error',
    },
  },
);
