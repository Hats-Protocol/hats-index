import type { Abi, Address } from 'viem';
import type { ChainConfig, ContractConfig } from 'ponder';

import { HatsAbi } from '../abis/HatsAbi';
import { HatsSignerGateFactoryAbi } from '../abis/HatsSignerGateFactoryAbi';
import { ERC6551RegistryAbi } from '../abis/ERC6551RegistryAbi';
import { HatsModuleFactoryV0_6_0Abi } from '../abis/HatsModuleFactoryV0_6_0Abi';
import { HatsModuleFactoryV0_7_0Abi } from '../abis/HatsModuleFactoryV0_7_0Abi';
import { ModuleProxyFactoryAbi } from '../abis/ModuleProxyFactoryAbi';
import { chainStringToChainId } from './utils';
import { ChainName, HatsProtocolConfig } from './types';

export const CONTRACT_ABIS = {
  Hats: HatsAbi,
  HatsSignerGateFactory: HatsSignerGateFactoryAbi,
  ERC6551Registry: ERC6551RegistryAbi,
  HatsModuleFactoryV0_6_0: HatsModuleFactoryV0_6_0Abi,
  HatsModuleFactoryV0_7_0: HatsModuleFactoryV0_7_0Abi,
  ModuleProxyFactory: ModuleProxyFactoryAbi,
};

export const NETWORK_CONTRACTS: Record<ChainName, Record<string, { address: Address; startBlock: number }>> = {
  sepolia: {
    Hats: {
      address: '0x3bc1A0Ad72417f2d411118085256fC53CBdDd137' as Address,
      startBlock: 4654775,
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

const getChainsConfig = (config: HatsProtocolConfig): Record<string, ChainConfig> => {
  const chains: Record<string, { id: number; rpc: string }> = {};

  for (const chain of Object.keys(config.chains)) {
    // skip chains that don't have a matching value
    if (!NETWORK_CONTRACTS[chain as ChainName]) continue;

    const rpc = config.chains[chain as ChainName]?.rpc;
    if (!rpc) continue;

    chains[chain] = { id: chainStringToChainId(chain as ChainName), rpc };
  }

  return chains;
};

const getContractsConfig = (config: HatsProtocolConfig): Record<string, ContractConfig> => {
  const contracts: Record<string, { abi: Abi; chain: Record<string, { address: Address; startBlock: number }> }> = {};

  const contractKeys = Object.keys(CONTRACT_ABIS);

  // iterate known contracts
  for (const contract of contractKeys) {
    const chainList: Record<string, { address: Address; startBlock: number }> = {};

    // iterate chains passed in config
    for (const chain of Object.keys(config.chains)) {
      // skip chains that don't have a matching contract
      const chainContract = NETWORK_CONTRACTS[chain as ChainName][contract as keyof typeof NETWORK_CONTRACTS[ChainName]];
      if (!chainContract) {
        continue;
      }

      chainList[chain as ChainName] = chainContract;
    }

    contracts[contract] = {
      abi: CONTRACT_ABIS[contract as keyof typeof CONTRACT_ABIS],
      chain: chainList,
    };
  }

  return contracts;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createHatsIndex(config: HatsProtocolConfig): any {
  return {
    chains: getChainsConfig(config),
    contracts: getContractsConfig(config),
  };
}
