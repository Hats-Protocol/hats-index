import { createConfig } from 'ponder';
import { http } from 'viem';

import { HatsAbi } from './abis/HatsAbi';
import { HatsSignerGateFactoryAbi } from './abis/HatsSignerGateFactoryAbi';
import { ERC6551RegistryAbi } from './abis/ERC6551RegistryAbi';
import { HatsModuleFactoryV0_6_0Abi } from './abis/HatsModuleFactoryV0_6_0Abi';
import { HatsModuleFactoryV0_7_0Abi } from './abis/HatsModuleFactoryV0_7_0Abi';
import { ModuleProxyFactoryAbi } from './abis/ModuleProxyFactoryAbi';

export default createConfig({
  networks: {
    sepolia: {
      chainId: 11155111,
      transport: http(process.env.SEPOLIA_HTTP_PROVIDER),
    },
    // baseSepolia: {
    //   chainId: 84532,
    //   transport: http(process.env.BASE_SEPOLIA_HTTP_PROVIDER),
    // },
  },
  contracts: {
    Hats: {
      abi: HatsAbi,
      network: {
        sepolia: {
          address: '0x3bc1A0Ad72417f2d411118085256fC53CBdDd137',
          startBlock: 5516083,
        },
        // baseSepolia: {
        //   address: '0x3bc1A0Ad72417f2d411118085256fC53CBdDd137',
        //   startBlock: 5516083,
        // },
      },
    },
    HatsSignerGateFactory: {
      abi: HatsSignerGateFactoryAbi,
      network: {
        sepolia: {
          address: '0x5CB8a5B063B7E94cF39E8A8813A777f49B8DD050',
          startBlock: 4929153,
        },
        // baseSepolia: {
        //   address: '0x5CB8a5B063B7E94cF39E8A8813A777f49B8DD050',
        //   startBlock: 4929153,
        // },
      },
    },
    ERC6551Registry: {
      abi: ERC6551RegistryAbi,
      network: {
        sepolia: {
          address: '0x000000006551c19487814612e58FE06813775758',
          startBlock: 5199209,
        },
        // baseSepolia: {
        //   address: '0x000000006551c19487814612e58FE06813775758',
        //   startBlock: 5199209,
        // },
      },
    },
    HatsModuleFactoryV0_6_0: {
      abi: HatsModuleFactoryV0_6_0Abi,
      network: {
        sepolia: {
          address: '0xfE661c01891172046feE16D3a57c3Cf456729efA',
          startBlock: 4655267,
        },
        // baseSepolia: {
        //   address: '0xfE661c01891172046feE16D3a57c3Cf456729efA',
        //   startBlock: 4655267,
        // },
      },
    },
    HatsModuleFactoryV0_7_0: {
      abi: HatsModuleFactoryV0_7_0Abi,
      network: {
        sepolia: {
          address: '0x0a3f85fa597B6a967271286aA0724811acDF5CD9',
          startBlock: 5516083,
        },
        // baseSepolia: {
        //   address: '0x0a3f85fa597B6a967271286aA0724811acDF5CD9',
        //   startBlock: 5516083,
        // },
      },
    },
    ModuleProxyFactory: {
      abi: ModuleProxyFactoryAbi,
      network: {
        sepolia: {
          address: '0x000000000000aDdB49795b0f9bA5BC298cDda236',
          startBlock: 7201757,
        },
        // baseSepolia: {
        //   address: '0x000000000000aDdB49795b0f9bA5BC298cDda236',
        //   startBlock: 7201757,
        // },
      },
    },
  },
});
