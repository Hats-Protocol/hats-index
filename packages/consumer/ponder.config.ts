import { createConfig } from 'ponder';
import { createHatsProtocol } from 'hats-ponder-sdk';

export default createConfig({
  database: {
    kind: 'postgres',
    connectionString: process.env.DATABASE_URL,
  },
  ...createHatsProtocol({
    networks: {
      sepolia: {
        rpcUrl: process.env.PONDER_RPC_URL_11155111 || '',
      },
      // baseSepolia: {
      //   rpcUrl: process.env.PONDER_RPC_URL_84532,
      // },
    },
  }),
});
