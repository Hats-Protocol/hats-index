import { createConfig } from 'ponder';
import type { DatabaseConfig } from 'ponder';
import { createHatsIndex } from '@hatsprotocol/ponder-sdk';

const database: DatabaseConfig = {
  kind: 'postgres',
  connectionString: process.env.DATABASE_URL,
};

const { chains, contracts } = createHatsIndex({
  chains: {
    // mainnet: { rpc: process.env.MAINNET_HTTP_PROVIDER || '' },
    // optimism: { rpc: process.env.OPTIMISM_HTTP_PROVIDER || '' },
    // gnosis: { rpc: process.env.GNOSIS_HTTP_PROVIDER || '' },
    // polygon: { rpc: process.env.POLYGON_HTTP_PROVIDER || '' },
    // arbitrum: { rpc: process.env.ARBITRUM_HTTP_PROVIDER || '' },
    // celo: { rpc: process.env.CELO_HTTP_PROVIDER || '' },

    // testnets
    sepolia: { rpc: process.env.SEPOLIA_HTTP_PROVIDER || '' },
    // baseSepolia: { rpc: process.env.BASE_SEPOLIA_HTTP_PROVIDER || '' },
  },
});

export default createConfig({
  database,
  chains,
  contracts,
});
