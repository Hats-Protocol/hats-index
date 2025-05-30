export const StakingEligibilityAbi = [
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
    name: "StakingEligibility_AlreadySlashed",
    type: "error",
  },
  {
    inputs: [],
    name: "StakingEligibility_CooldownNotEnded",
    type: "error",
  },
  {
    inputs: [],
    name: "StakingEligibility_HatImmutable",
    type: "error",
  },
  {
    inputs: [],
    name: "StakingEligibility_InsufficientStake",
    type: "error",
  },
  {
    inputs: [],
    name: "StakingEligibility_NoCooldown",
    type: "error",
  },
  {
    inputs: [],
    name: "StakingEligibility_NotHatAdmin",
    type: "error",
  },
  {
    inputs: [],
    name: "StakingEligibility_NotJudge",
    type: "error",
  },
  {
    inputs: [],
    name: "StakingEligibility_NotRecipient",
    type: "error",
  },
  {
    inputs: [],
    name: "StakingEligibility_NotSlashed",
    type: "error",
  },
  {
    inputs: [],
    name: "StakingEligibility_NothingToWithdraw",
    type: "error",
  },
  {
    inputs: [],
    name: "StakingEligibility_TransferFailed",
    type: "error",
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
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "StakingEligibility_CooldownPeriodChanged",
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
        name: "instance",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint248",
        name: "minStake",
        type: "uint248",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "judgeHat",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "recipientHat",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cooldownPeriod",
        type: "uint256",
      },
    ],
    name: "StakingEligibility_Deployed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "StakingEligibility_Forgiven",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newJudgeHat",
        type: "uint256",
      },
    ],
    name: "StakingEligibility_JudgeHatChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint248",
        name: "newMinStake",
        type: "uint248",
      },
    ],
    name: "StakingEligibility_MinStakeChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newRecipientHat",
        type: "uint256",
      },
    ],
    name: "StakingEligibility_RecipientHatChanged",
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
        internalType: "uint248",
        name: "amount",
        type: "uint248",
      },
    ],
    name: "StakingEligibility_Slashed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint248",
        name: "amount",
        type: "uint248",
      },
    ],
    name: "StakingEligibility_Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint248",
        name: "amount",
        type: "uint248",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cooldownEnd",
        type: "uint256",
      },
    ],
    name: "StakingEligibility_UnstakeBegun",
    type: "event",
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
    inputs: [],
    name: "TOKEN",
    outputs: [
      {
        internalType: "contract IERC20",
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
        internalType: "uint248",
        name: "_amount",
        type: "uint248",
      },
    ],
    name: "beginUnstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cooldownPeriod",
        type: "uint256",
      },
    ],
    name: "changeCooldownPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_judgeHat",
        type: "uint256",
      },
    ],
    name: "changeJudgeHat",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint248",
        name: "_minStake",
        type: "uint248",
      },
    ],
    name: "changeMinStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_recipientHat",
        type: "uint256",
      },
    ],
    name: "changeRecipientHat",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_staker",
        type: "address",
      },
    ],
    name: "completeUnstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "completeUnstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cooldownPeriod",
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
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "cooldowns",
    outputs: [
      {
        internalType: "uint248",
        name: "amount",
        type: "uint248",
      },
      {
        internalType: "uint256",
        name: "endsAt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_staker",
        type: "address",
      },
    ],
    name: "forgive",
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
        name: "",
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
    inputs: [],
    name: "judgeHat",
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
    inputs: [],
    name: "minStake",
    outputs: [
      {
        internalType: "uint248",
        name: "",
        type: "uint248",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "recipientHat",
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
        name: "_staker",
        type: "address",
      },
    ],
    name: "slash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint248",
        name: "_amount",
        type: "uint248",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "stakes",
    outputs: [
      {
        internalType: "uint248",
        name: "amount",
        type: "uint248",
      },
      {
        internalType: "bool",
        name: "slashed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSlashedStakes",
    outputs: [
      {
        internalType: "uint248",
        name: "",
        type: "uint248",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
