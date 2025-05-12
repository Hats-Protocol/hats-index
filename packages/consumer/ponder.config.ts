import { createConfig } from 'ponder';
import { createHatsProtocol } from 'hats-ponder-sdk';

export default createConfig({
  database: {
    kind: 'postgres',
    connectionString: process.env.DATABASE_URL,
  },
  ...createHatsProtocol({
    networks: {
      // mainnet: {
      //   rpcUrl: process.env.MAINNET_HTTP_PROVIDER || '',
      // },
      // optimism: {
      //   rpcUrl: process.env.OPTIMISM_HTTP_PROVIDER || '',
      // },
      // gnosis: {
      //   rpcUrl: process.env.GNOSIS_HTTP_PROVIDER || '',
      // },
      // polygon: {
      //   rpcUrl: process.env.POLYGON_HTTP_PROVIDER || '',
      // },
      // arbitrum: {
      //   rpcUrl: process.env.ARBITRUM_HTTP_PROVIDER || '',
      // },
      // celo: {
      //   rpcUrl: process.env.CELO_HTTP_PROVIDER || '',
      // },

      // testnets
      sepolia: {
        rpcUrl: process.env.SEPOLIA_HTTP_PROVIDER || '',
      },
      // baseSepolia: {
      //   rpcUrl: process.env.BASE_SEPOLIA_HTTP_PROVIDER || '',
      // },

    },
  }),
});
