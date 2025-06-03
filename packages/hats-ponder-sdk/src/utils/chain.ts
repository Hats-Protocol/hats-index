import { NETWORK_CHAIN_IDS } from "../constants";
import { ChainName } from "../types";

export const chainStringToChainId = (chainName: ChainName) => {
  return NETWORK_CHAIN_IDS[chainName];
};

export const chainIdToChainName = (chainId: number): ChainName | undefined => {
  return Object.keys(NETWORK_CHAIN_IDS).find((key) => NETWORK_CHAIN_IDS[key as ChainName] === chainId) as
    | ChainName
    | undefined;
};
