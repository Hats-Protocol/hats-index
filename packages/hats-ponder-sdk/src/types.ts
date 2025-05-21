// import type { Contract, EventFor } from 'ponder:registry';

interface HatsChainConfig {
  rpc: string;
}

export type ChainName = 'sepolia' | 'baseSepolia';

export interface HatsProtocolConfig {
  chains: Partial<{ [key in ChainName]: HatsChainConfig }>;
}

// import { HatsModuleFactoryV0_7_0Abi } from '../abis/HatsModuleFactoryV0_7_0Abi';
// import { Erc20EligibilityAbi } from '../abis/Erc20EligibilityAbi';
// import { Erc721EligibilityAbi } from '../abis/Erc721EligibilityAbi';
// import { Erc1155EligibilityAbi } from '../abis/Erc1155EligibilityAbi';
// import { HatWearingEligibilityAbi } from '../abis/HatWearingEligibilityAbi';
// import { HatsEligibilitiesChainV_0_2_0Abi } from '../abis/HatsEligibilitiesChainV_0_2_0Abi';

// // Define contract types
// export type HatsModuleFactoryV0_7_0 = Contract<
//   typeof HatsModuleFactoryV0_7_0Abi
// >;
// export type Erc20Eligibility = Contract<typeof Erc20EligibilityAbi>;
// export type Erc721Eligibility = Contract<typeof Erc721EligibilityAbi>;
// export type Erc1155Eligibility = Contract<typeof Erc1155EligibilityAbi>;
// export type HatWearingEligibility = Contract<typeof HatWearingEligibilityAbi>;
// export type HatsEligibilitiesChainV0_2_0 = Contract<
//   typeof HatsEligibilitiesChainV_0_2_0Abi
// >;

// // Define event types
// export type ModuleDeployedEvent = EventFor<
//   HatsModuleFactoryV0_7_0,
//   'HatsModuleFactory_ModuleDeployed'
// >;

// export type InitializedEvent =
//   | EventFor<Erc20Eligibility, 'Initialized'>
//   | EventFor<Erc721Eligibility, 'Initialized'>
//   | EventFor<Erc1155Eligibility, 'Initialized'>
//   | EventFor<HatWearingEligibility, 'Initialized'>
//   | EventFor<HatsEligibilitiesChainV0_2_0, 'Initialized'>;
