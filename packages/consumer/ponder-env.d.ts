/// <reference types="ponder/virtual" />

declare module 'ponder:internal' {
  const config: typeof import('./ponder.config.ts');
  const schema: typeof import('./ponder.schema.ts');
}

declare module 'ponder:schema' {
  export * from './ponder.schema.ts';
}

declare module 'hats-ponder-sdk' {
  export function createHatsProtocol(config: {
    networks: {
      [key: string]: {
        rpcUrl: string;
      };
    };
  }): any;
}

// This file enables type checking and editor autocomplete for this Ponder project.
// After upgrading, you may find that changes have been made to this file.
// If this happens, please commit the changes. Do not manually edit this file.
// See https://ponder.sh/docs/getting-started/installation#typescript for more information.
