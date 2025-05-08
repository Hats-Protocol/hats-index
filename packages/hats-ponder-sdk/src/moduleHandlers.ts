import { ponder } from 'ponder:registry';
import { module } from '../ponder.schema';
import type { Context } from 'ponder';
import type { Event } from 'ponder/events';
import type { HatsModuleFactoryV0_7_0Abi } from '../abis/HatsModuleFactoryV0_7_0Abi';
import type { Erc20EligibilityAbi } from '../abis/Erc20EligibilityAbi';
import type { Erc721EligibilityAbi } from '../abis/Erc721EligibilityAbi';
import type { Erc1155EligibilityAbi } from '../abis/Erc1155EligibilityAbi';
import type { HatWearingEligibilityAbi } from '../abis/HatWearingEligibilityAbi';
import type { HatsEligibilitiesChainV_0_2_0Abi } from '../abis/HatsEligibilitiesChainV_0_2_0Abi';

type ModuleType =
  | 'ERC20'
  | 'ERC721'
  | 'ERC1155'
  | 'HAT_WEARING'
  | 'ELIGIBILITY_CHAIN'
  | 'TOGGLE_CHAIN';

type ModuleDeployedEvent = {
  args: {
    implementation: `0x${string}`;
    instance: `0x${string}`;
    hatId: bigint;
    otherImmutableArgs: `0x${string}`;
    initData: `0x${string}`;
    saltNonce: bigint;
  };
  log: {
    address: `0x${string}`;
    data: `0x${string}`;
    logIndex: number;
    removed: boolean;
    topics: `0x${string}`[];
  };
  block: {
    hash: `0x${string}`;
    number: bigint;
  };
  transaction: {
    hash: `0x${string}`;
  };
};

type InitializedEvent = {
  args: {
    version: number;
  };
  log: {
    address: `0x${string}`;
    data: `0x${string}`;
    logIndex: number;
    removed: boolean;
    topics: `0x${string}`[];
  };
  block: {
    hash: `0x${string}`;
    number: bigint;
  };
  transaction: {
    hash: `0x${string}`;
  };
};

interface PonderContext {
  db: {
    insert: (table: any) => {
      values: (data: any) => Promise<void>;
    };
  };
  network: {
    chainId: number;
  };
}

// Handle each module type's Initialized event separately
const handleModuleInitialized = async ({
  event,
  context,
  contractName,
  moduleType,
}: {
  event: any;
  context: any;
  contractName: string;
  moduleType: ModuleType;
}) => {
  const contractAddress = event.log.address;

  try {
    // Get implementation address from contract
    const implementation = await context.contracts[
      contractName
    ].read.IMPLEMENTATION();

    // Get hat ID from contract
    const hatId = await context.contracts[contractName].read.CONTROLLER_HAT();

    // Create deployed module record
    await context.db.insert(module).values({
      id: event.id,
      implementation,
      instance: contractAddress,
      hatId,
      moduleType,
      chainId: context.network.chainId,
    });
  } catch (error) {
    console.error('Error handling module initialization:', error);
  }
};

// Helper function to determine module type based on implementation address
async function determineModuleType(
  implementation: `0x${string}`,
  context: any
): Promise<ModuleType | null> {
  // Implementation address matching logic here
  return null; // Placeholder
}

// Helper function to handle module deployment
async function handleModuleDeployed({
  event,
  context,
  moduleType,
  instance,
  hatId,
  otherImmutableArgs,
  initData,
}: {
  event: ModuleDeployedEvent;
  context: any;
  moduleType: string;
  instance: `0x${string}`;
  hatId: bigint;
  otherImmutableArgs: `0x${string}`;
  initData: `0x${string}`;
}) {
  try {
    await context.db.insert(module).values({
      id: event.transaction.hash,
      implementation: event.args.implementation,
      instance,
      hatId: hatId.toString(),
      moduleType,
      chainId: context.network.chainId,
    });
  } catch (error) {
    console.error('Error handling module deployment:', error);
  }
}

// Register event handlers for each module type
ponder.on(
  'HatsModuleFactoryV0_7_0:HatsModuleFactory_ModuleDeployed',
  async ({ event, context }) => {
    const { implementation, instance, hatId, otherImmutableArgs, initData } =
      event.args;

    // Determine module type based on implementation address
    const moduleType = await determineModuleType(implementation, context);

    if (moduleType) {
      await handleModuleDeployed({
        event,
        context,
        moduleType,
        instance,
        hatId,
        otherImmutableArgs,
        initData,
      });
    }
  }
);

// Keep existing Initialized event handlers with proper types
ponder.on('Erc20Eligibility:Initialized', async ({ event, context }) => {
  await handleModuleInitialized({
    event,
    context,
    contractName: 'Erc20Eligibility',
    moduleType: 'ERC20',
  });
});

ponder.on('Erc721Eligibility:Initialized', async ({ event, context }) => {
  await handleModuleInitialized({
    event,
    context,
    contractName: 'Erc721Eligibility',
    moduleType: 'ERC721',
  });
});

ponder.on('Erc1155Eligibility:Initialized', async ({ event, context }) => {
  await handleModuleInitialized({
    event,
    context,
    contractName: 'Erc1155Eligibility',
    moduleType: 'ERC1155',
  });
});

ponder.on('HatWearingEligibility:Initialized', async ({ event, context }) => {
  await handleModuleInitialized({
    event,
    context,
    contractName: 'HatWearingEligibility',
    moduleType: 'HAT_WEARING',
  });
});

ponder.on(
  'HatsEligibilitiesChainV0_2_0:Initialized',
  async ({ event, context }) => {
    await handleModuleInitialized({
      event,
      context,
      contractName: 'HatsEligibilitiesChainV0_2_0',
      moduleType: 'ELIGIBILITY_CHAIN',
    });
  }
);
