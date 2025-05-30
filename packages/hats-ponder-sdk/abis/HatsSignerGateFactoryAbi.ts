export const HatsSignerGateFactoryAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_hatsSignerGateSingleton",
        type: "address",
      },
      {
        internalType: "address",
        name: "_multiHatsSignerGateSingleton",
        type: "address",
      },
      {
        internalType: "address",
        name: "_hatsAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_safeSingleton",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gnosisFallbackLibrary",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gnosisMultisendLibrary",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gnosisSafeProxyFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_moduleProxyFactory",
        type: "address",
      },
      {
        internalType: "string",
        name: "_version",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "NoOtherModulesAllowed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_hatsSignerGate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_ownerHatId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_signersHatId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_safe",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_minThreshold",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_targetThreshold",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_maxSigners",
        type: "uint256",
      },
    ],
    name: "HatsSignerGateSetup",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_hatsSignerGate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_ownerHatId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_signersHatIds",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_safe",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_minThreshold",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_targetThreshold",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_maxSigners",
        type: "uint256",
      },
    ],
    name: "MultiHatsSignerGateSetup",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract HatsSignerGate",
        name: "_hsg",
        type: "address",
      },
    ],
    name: "canAttachHSGToSafe",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract MultiHatsSignerGate",
        name: "_mhsg",
        type: "address",
      },
    ],
    name: "canAttachMHSGToSafe",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_ownerHatId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_signersHatId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_safe",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_targetThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxSigners",
        type: "uint256",
      },
    ],
    name: "deployHatsSignerGate",
    outputs: [
      {
        internalType: "address",
        name: "hsg",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_ownerHatId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_signersHatId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_targetThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxSigners",
        type: "uint256",
      },
    ],
    name: "deployHatsSignerGateAndSafe",
    outputs: [
      {
        internalType: "address",
        name: "hsg",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "safe",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_ownerHatId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_signersHatIds",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "_safe",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_targetThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxSigners",
        type: "uint256",
      },
    ],
    name: "deployMultiHatsSignerGate",
    outputs: [
      {
        internalType: "address",
        name: "mhsg",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_ownerHatId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_signersHatIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_minThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_targetThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxSigners",
        type: "uint256",
      },
    ],
    name: "deployMultiHatsSignerGateAndSafe",
    outputs: [
      {
        internalType: "address",
        name: "mhsg",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "safe",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gnosisFallbackLibrary",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gnosisMultisendLibrary",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gnosisSafeProxyFactory",
    outputs: [
      {
        internalType: "contract GnosisSafeProxyFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hatsAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hatsSignerGateSingleton",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "moduleProxyFactory",
    outputs: [
      {
        internalType: "contract ModuleProxyFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "multiHatsSignerGateSingleton",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "safeSingleton",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
