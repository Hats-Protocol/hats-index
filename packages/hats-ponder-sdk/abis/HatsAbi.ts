export const HatsAbi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_baseImageURI",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hatId",
        type: "uint256",
      },
    ],
    name: "AllHatsWorn",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wearer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "hatId",
        type: "uint256",
      },
    ],
    name: "AlreadyWearingHat",
    type: "error",
  },
  {
    inputs: [],
    name: "BatchArrayLengthMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "CircularLinkage",
    type: "error",
  },
  {
    inputs: [],
    name: "CrossTreeLinkage",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hatId",
        type: "uint256",
      },
    ],
    name: "HatDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "HatNotActive",
    type: "error",
  },
  {
    inputs: [],
    name: "Immutable",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidHatId",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidUnlink",
    type: "error",
  },
  {
    inputs: [],
    name: "LinkageNotRequested",
    type: "error",
  },
  {
    inputs: [],
    name: "MaxLevelsReached",
    type: "error",
  },
  {
    inputs: [],
    name: "MaxLevelsReached",
    type: "error",
  },
  {
    inputs: [],
    name: "NewMaxSupplyTooLow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "hatId",
        type: "uint256",
      },
    ],
    name: "NotAdmin",
    type: "error",
  },
  {
    inputs: [],
    name: "NotAdminOrWearer",
    type: "error",
  },
  {
    inputs: [],
    name: "NotEligible",
    type: "error",
  },
  {
    inputs: [],
    name: "NotHatWearer",
    type: "error",
  },
  {
    inputs: [],
    name: "NotHatsEligibility",
    type: "error",
  },
  {
    inputs: [],
    name: "NotHatsToggle",
    type: "error",
  },
  {
    inputs: [],
    name: "StringTooLong",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "details",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "maxSupply",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "eligibility",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "toggle",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "mutable_",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "string",
        name: "imageURI",
        type: "string",
      },
    ],
    name: "HatCreated",
    type: "event",
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
        internalType: "string",
        name: "newDetails",
        type: "string",
      },
    ],
    name: "HatDetailsChanged",
    type: "event",
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
        internalType: "address",
        name: "newEligibility",
        type: "address",
      },
    ],
    name: "HatEligibilityChanged",
    type: "event",
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
        internalType: "string",
        name: "newImageURI",
        type: "string",
      },
    ],
    name: "HatImageURIChanged",
    type: "event",
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
        internalType: "uint32",
        name: "newMaxSupply",
        type: "uint32",
      },
    ],
    name: "HatMaxSupplyChanged",
    type: "event",
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
    ],
    name: "HatMutabilityChanged",
    type: "event",
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
        name: "newStatus",
        type: "bool",
      },
    ],
    name: "HatStatusChanged",
    type: "event",
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
        internalType: "address",
        name: "newToggle",
        type: "address",
      },
    ],
    name: "HatToggleChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newAdmin",
        type: "uint256",
      },
    ],
    name: "TopHatLinkRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newAdmin",
        type: "uint256",
      },
    ],
    name: "TopHatLinked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
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
        internalType: "address",
        name: "wearer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "wearerStanding",
        type: "bool",
      },
    ],
    name: "WearerStandingChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_topHatDomain",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_newAdminHat",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_eligibility",
        type: "address",
      },
      {
        internalType: "address",
        name: "_toggle",
        type: "address",
      },
      {
        internalType: "string",
        name: "_details",
        type: "string",
      },
      {
        internalType: "string",
        name: "_imageURI",
        type: "string",
      },
    ],
    name: "approveLinkTopHatToTree",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "badStandings",
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
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_wearers",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_hatIds",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseImageURI",
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
    inputs: [
      {
        internalType: "uint256[]",
        name: "_admins",
        type: "uint256[]",
      },
      {
        internalType: "string[]",
        name: "_details",
        type: "string[]",
      },
      {
        internalType: "uint32[]",
        name: "_maxSupplies",
        type: "uint32[]",
      },
      {
        internalType: "address[]",
        name: "_eligibilityModules",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_toggleModules",
        type: "address[]",
      },
      {
        internalType: "bool[]",
        name: "_mutables",
        type: "bool[]",
      },
      {
        internalType: "string[]",
        name: "_imageURIs",
        type: "string[]",
      },
    ],
    name: "batchCreateHats",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_hatIds",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "_wearers",
        type: "address[]",
      },
    ],
    name: "batchMintHats",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_admin",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_newHat",
        type: "uint16",
      },
    ],
    name: "buildHatId",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
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
        internalType: "string",
        name: "_newDetails",
        type: "string",
      },
    ],
    name: "changeHatDetails",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "_newEligibility",
        type: "address",
      },
    ],
    name: "changeHatEligibility",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "string",
        name: "_newImageURI",
        type: "string",
      },
    ],
    name: "changeHatImageURI",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint32",
        name: "_newMaxSupply",
        type: "uint32",
      },
    ],
    name: "changeHatMaxSupply",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "_newToggle",
        type: "address",
      },
    ],
    name: "changeHatToggle",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "checkHatStatus",
    outputs: [
      {
        internalType: "bool",
        name: "toggled",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "_wearer",
        type: "address",
      },
    ],
    name: "checkHatWearerStatus",
    outputs: [
      {
        internalType: "bool",
        name: "updated",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_admin",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_details",
        type: "string",
      },
      {
        internalType: "uint32",
        name: "_maxSupply",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_eligibility",
        type: "address",
      },
      {
        internalType: "address",
        name: "_toggle",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_mutable",
        type: "bool",
      },
      {
        internalType: "string",
        name: "_imageURI",
        type: "string",
      },
    ],
    name: "createHat",
    outputs: [
      {
        internalType: "uint256",
        name: "newHatId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
        internalType: "uint32",
        name: "_level",
        type: "uint32",
      },
    ],
    name: "getAdminAtLevel",
    outputs: [
      {
        internalType: "uint256",
        name: "admin",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
        internalType: "uint32",
        name: "_level",
        type: "uint32",
      },
    ],
    name: "getAdminAtLocalLevel",
    outputs: [
      {
        internalType: "uint256",
        name: "admin",
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
    ],
    name: "getHatEligibilityModule",
    outputs: [
      {
        internalType: "address",
        name: "eligibility",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    name: "getHatLevel",
    outputs: [
      {
        internalType: "uint32",
        name: "level",
        type: "uint32",
      },
    ],
    stateMutability: "view",
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
    name: "getHatMaxSupply",
    outputs: [
      {
        internalType: "uint32",
        name: "maxSupply",
        type: "uint32",
      },
    ],
    stateMutability: "view",
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
    name: "getHatToggleModule",
    outputs: [
      {
        internalType: "address",
        name: "toggle",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    name: "getImageURIForHat",
    outputs: [
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    stateMutability: "view",
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
    name: "getLocalHatLevel",
    outputs: [
      {
        internalType: "uint32",
        name: "level",
        type: "uint32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_admin",
        type: "uint256",
      },
    ],
    name: "getNextId",
    outputs: [
      {
        internalType: "uint256",
        name: "nextId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_topHatDomain",
        type: "uint32",
      },
    ],
    name: "getTippyTopHatDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
    ],
    stateMutability: "view",
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
    name: "getTopHatDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "domain",
        type: "uint32",
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
    name: "hatSupply",
    outputs: [
      {
        internalType: "uint32",
        name: "supply",
        type: "uint32",
      },
    ],
    stateMutability: "view",
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
    name: "isActive",
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
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_hatId",
        type: "uint256",
      },
    ],
    name: "isAdminOfHat",
    outputs: [
      {
        internalType: "bool",
        name: "isAdmin",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    name: "isEligible",
    outputs: [
      {
        internalType: "bool",
        name: "eligible",
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
    name: "isInGoodStanding",
    outputs: [
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
    inputs: [
      {
        internalType: "uint256",
        name: "_hatId",
        type: "uint256",
      },
    ],
    name: "isLocalTopHat",
    outputs: [
      {
        internalType: "bool",
        name: "_isLocalTopHat",
        type: "bool",
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
    name: "isTopHat",
    outputs: [
      {
        internalType: "bool",
        name: "_isTopHat",
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
        name: "_hatId",
        type: "uint256",
      },
    ],
    name: "isValidHatId",
    outputs: [
      {
        internalType: "bool",
        name: "validHatId",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_hatId",
        type: "uint256",
      },
    ],
    name: "isWearerOfHat",
    outputs: [
      {
        internalType: "bool",
        name: "isWearer",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastTopHatId",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "linkedTreeAdmins",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "linkedTreeRequests",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
    name: "makeHatImmutable",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "_wearer",
        type: "address",
      },
    ],
    name: "mintHat",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "string",
        name: "_details",
        type: "string",
      },
      {
        internalType: "string",
        name: "_imageURI",
        type: "string",
      },
    ],
    name: "mintTopHat",
    outputs: [
      {
        internalType: "uint256",
        name: "topHatId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    inputs: [
      {
        internalType: "uint32",
        name: "_topHatDomain",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_linkedAdmin",
        type: "uint256",
      },
    ],
    name: "noCircularLinkage",
    outputs: [
      {
        internalType: "bool",
        name: "notCircular",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_topHatDomain",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_newAdminHat",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_eligibility",
        type: "address",
      },
      {
        internalType: "address",
        name: "_toggle",
        type: "address",
      },
      {
        internalType: "string",
        name: "_details",
        type: "string",
      },
      {
        internalType: "string",
        name: "_imageURI",
        type: "string",
      },
    ],
    name: "relinkTopHatWithinTree",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "renounceHat",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_topHatDomain",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_requestedAdminHat",
        type: "uint256",
      },
    ],
    name: "requestLinkTopHatToTree",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_topHatDomain",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_newAdminHat",
        type: "uint256",
      },
    ],
    name: "sameTippyTopHatDomain",
    outputs: [
      {
        internalType: "bool",
        name: "sameDomain",
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
        name: "",
        type: "address",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
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
    outputs: [
      {
        internalType: "bool",
        name: "toggled",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "_wearer",
        type: "address",
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
    name: "setHatWearerStatus",
    outputs: [
      {
        internalType: "bool",
        name: "updated",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "transferHat",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_topHatDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_wearer",
        type: "address",
      },
    ],
    name: "unlinkTopHatFromTree",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    stateMutability: "view",
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
    name: "viewHat",
    outputs: [
      {
        internalType: "string",
        name: "details",
        type: "string",
      },
      {
        internalType: "uint32",
        name: "maxSupply",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "supply",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "eligibility",
        type: "address",
      },
      {
        internalType: "address",
        name: "toggle",
        type: "address",
      },
      {
        internalType: "string",
        name: "imageURI",
        type: "string",
      },
      {
        internalType: "uint16",
        name: "lastHatId",
        type: "uint16",
      },
      {
        internalType: "bool",
        name: "mutable_",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "active",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
