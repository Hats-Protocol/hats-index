export const HatControlledModuleV_0_1_0Abi = [
  {
    inputs: [
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
    name: "NotAuthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "hatId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "active",
        type: "bool",
      },
    ],
    name: "HatStatusSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "wearer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "hatId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "eligible",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "standing",
        type: "bool",
      },
    ],
    name: "WearerStatusSet",
    type: "event",
  },
  {
    inputs: [],
    name: "CONTROLLER_HAT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "HATS",
    outputs: [
      {
        internalType: "contract IHats",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "IMPLEMENTATION",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_hatId",
        type: "uint256",
      },
    ],
    name: "getHatStatus",
    outputs: [
      {
        internalType: "bool",
        name: "active",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wearer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_hatId",
        type: "uint256",
      },
    ],
    name: "getWearerStatus",
    outputs: [
      {
        internalType: "bool",
        name: "eligible",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "standing",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hatId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_hatId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_newStatus",
        type: "bool",
      },
    ],
    name: "setHatStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_initData",
        type: "bytes",
      },
    ],
    name: "setUp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wearer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_hatId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_eligible",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "_standing",
        type: "bool",
      },
    ],
    name: "setWearerStatus",
    outputs: [],
    stateMutability: "nonpayable",
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
  {
    inputs: [],
    name: "version_",
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
