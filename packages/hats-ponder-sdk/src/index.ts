import { http } from 'viem';
import type { Abi, Address, Hex } from 'viem';
import { ponder } from 'ponder:registry';
import { hat } from '../ponder.schema';
import { HatsAbi } from '../abis/HatsAbi';
import { HatsSignerGateFactoryAbi } from '../abis/HatsSignerGateFactoryAbi';
import { ERC6551RegistryAbi } from '../abis/ERC6551RegistryAbi';
import { HatsModuleFactoryV0_6_0Abi } from '../abis/HatsModuleFactoryV0_6_0Abi';
import { HatsModuleFactoryV0_7_0Abi } from '../abis/HatsModuleFactoryV0_7_0Abi';
import { ModuleProxyFactoryAbi } from '../abis/ModuleProxyFactoryAbi';
import { toHex } from 'viem';

// Export schema
export * from '../ponder.schema';

interface NetworkConfig {
  rpcUrl: string;
}

export interface HatsProtocolConfig {
  networks: {
    sepolia?: NetworkConfig;
    baseSepolia?: NetworkConfig;
  };
}

const NETWORK_CONTRACTS = {
  sepolia: {
    Hats: {
      address: '0x3bc1A0Ad72417f2d411118085256fC53CBdDd137' as Address,
      startBlock: 5516083,
    },
    HatsSignerGateFactory: {
      address: '0x5CB8a5B063B7E94cF39E8A8813A777f49B8DD050' as Address,
      startBlock: 4929153,
    },
    ERC6551Registry: {
      address: '0x000000006551c19487814612e58FE06813775758' as Address,
      startBlock: 5199209,
    },
    HatsModuleFactoryV0_6_0: {
      address: '0xfE661c01891172046feE16D3a57c3Cf456729efA' as Address,
      startBlock: 4655267,
    },
    HatsModuleFactoryV0_7_0: {
      address: '0x0a3f85fa597B6a967271286aA0724811acDF5CD9' as Address,
      startBlock: 5516083,
    },
    ModuleProxyFactory: {
      address: '0x000000000000aDdB49795b0f9bA5BC298cDda236' as Address,
      startBlock: 7201757,
    },
  },
  baseSepolia: {
    Hats: {
      address: '0x3bc1A0Ad72417f2d411118085256fC53CBdDd137' as Address,
      startBlock: 3311010,
    },
    HatsSignerGateFactory: {
      address: '0x0F22eFC6EA47b1EFF42D1A2a6E69440929400F86' as Address,
      startBlock: 3311010,
    },
    ERC6551Registry: {
      address: '0x000000006551c19487814612e58FE06813775758' as Address,
      startBlock: 3311010,
    },
    HatsModuleFactoryV0_6_0: {
      address: '0xfE661c01891172046feE16D3a57c3Cf456729efA' as Address,
      startBlock: 3311010,
    },
    HatsModuleFactoryV0_7_0: {
      address: '0x0a3f85fa597B6a967271286aA0724811acDF5CD9' as Address,
      startBlock: 3311010,
    },
    ModuleProxyFactory: {
      address: '0x000000000000aDdB49795b0f9bA5BC298cDda236' as Address,
      startBlock: 3311010,
    },
  },
};

interface NetworkContractConfig {
  address: Address;
  startBlock: number;
}

interface EventContext {
  network: {
    chainId: number;
  };
  db: any; // Using any for now since we don't have access to Ponder's types
}

interface HatCreatedEvent {
  args: {
    id: bigint;
    details: string;
    maxSupply: bigint;
    eligibility: string;
    toggle: string;
    mutable_: boolean;
    imageURI: string;
  };
  block: {
    timestamp: bigint;
  };
}

export function createHatsProtocol(config: HatsProtocolConfig) {
  const networks: Record<
    string,
    { chainId: number; transport: ReturnType<typeof http> }
  > = {};

  if (config.networks.sepolia) {
    networks.sepolia = {
      chainId: 11155111,
      transport: http(config.networks.sepolia.rpcUrl),
    };
  }

  if (config.networks.baseSepolia) {
    networks.baseSepolia = {
      chainId: 84532,
      transport: http(config.networks.baseSepolia.rpcUrl),
    };
  }

  return {
    networks,
    contracts: {
      Hats: {
        abi: HatsAbi as Abi,
        network: {
          ...(config.networks.sepolia && {
            sepolia: NETWORK_CONTRACTS.sepolia.Hats,
          }),
          ...(config.networks.baseSepolia && {
            baseSepolia: NETWORK_CONTRACTS.baseSepolia.Hats,
          }),
        },
      },
      HatsSignerGateFactory: {
        abi: HatsSignerGateFactoryAbi as Abi,
        network: {
          ...(config.networks.sepolia && {
            sepolia: NETWORK_CONTRACTS.sepolia.HatsSignerGateFactory,
          }),
          ...(config.networks.baseSepolia && {
            baseSepolia: NETWORK_CONTRACTS.baseSepolia.HatsSignerGateFactory,
          }),
        },
      },
      ERC6551Registry: {
        abi: ERC6551RegistryAbi as Abi,
        network: {
          ...(config.networks.sepolia && {
            sepolia: NETWORK_CONTRACTS.sepolia.ERC6551Registry,
          }),
          ...(config.networks.baseSepolia && {
            baseSepolia: NETWORK_CONTRACTS.baseSepolia.ERC6551Registry,
          }),
        },
      },
      HatsModuleFactoryV0_6_0: {
        abi: HatsModuleFactoryV0_6_0Abi as Abi,
        network: {
          ...(config.networks.sepolia && {
            sepolia: NETWORK_CONTRACTS.sepolia.HatsModuleFactoryV0_6_0,
          }),
          ...(config.networks.baseSepolia && {
            baseSepolia: NETWORK_CONTRACTS.baseSepolia.HatsModuleFactoryV0_6_0,
          }),
        },
      },
      HatsModuleFactoryV0_7_0: {
        abi: HatsModuleFactoryV0_7_0Abi as Abi,
        network: {
          ...(config.networks.sepolia && {
            sepolia: NETWORK_CONTRACTS.sepolia.HatsModuleFactoryV0_7_0,
          }),
          ...(config.networks.baseSepolia && {
            baseSepolia: NETWORK_CONTRACTS.baseSepolia.HatsModuleFactoryV0_7_0,
          }),
        },
      },
      ModuleProxyFactory: {
        abi: ModuleProxyFactoryAbi as Abi,
        network: {
          ...(config.networks.sepolia && {
            sepolia: NETWORK_CONTRACTS.sepolia.ModuleProxyFactory,
          }),
          ...(config.networks.baseSepolia && {
            baseSepolia: NETWORK_CONTRACTS.baseSepolia.ModuleProxyFactory,
          }),
        },
      },
    },
  };
}

// Handle HatCreated events from both networks
ponder.on('Hats:HatCreated', async ({ event, context }) => {
  const { id, details, maxSupply, eligibility, toggle, mutable_, imageURI } =
    event.args;

  // Convert maxSupply to a safe integer that PostgreSQL can handle
  const safeMaxSupply =
    maxSupply > BigInt(2147483647)
      ? 2147483647 // Use PostgreSQL integer max if the value is too large
      : Number(maxSupply);

  // Convert id to hex the same way as the subgraph
  const hatIdHex = '0x' + id.toString(16).padStart(64, '0');

  console.log('Indexing hat with chainId:', context.network.chainId);

  await context.db
    .insert(hat)
    .values({
      id: hatIdHex,
      chainId: Number(context.network.chainId),
      details,
      maxSupply: safeMaxSupply,
      eligibility,
      toggle,
      mutable: mutable_,
      imageUri: imageURI,
      createdAt: event.block.timestamp.toString(),
      lastHatId: hatIdHex,
    })
    .onConflictDoNothing();
});

// Handle HatDetailsChanged events from both networks
ponder.on('Hats:HatDetailsChanged', async ({ event, context }) => {
  const { hatId, newDetails } = event.args;

  // Convert hatId to hex the same way as the subgraph
  const hatIdHex = '0x' + hatId.toString(16).padStart(64, '0');

  await context.db
    .insert(hat)
    .values({
      id: hatIdHex,
      chainId: Number(context.network.chainId),
      details: newDetails,
    })
    .onConflictDoUpdate((existing) => ({
      details: newDetails,
    }));
});

// Handle HatEligibilityChanged events from both networks
ponder.on('Hats:HatEligibilityChanged', async ({ event, context }) => {
  const { hatId, newEligibility } = event.args;

  // Convert hatId to hex the same way as the subgraph
  const hatIdHex = '0x' + hatId.toString(16).padStart(64, '0');

  await context.db
    .insert(hat)
    .values({
      id: hatIdHex,
      chainId: Number(context.network.chainId),
      eligibility: newEligibility,
    })
    .onConflictDoUpdate((existing) => ({
      eligibility: newEligibility,
    }));
});
