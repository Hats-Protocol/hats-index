import { hatIdHexToDecimal } from '@hatsprotocol/sdk-v1-core';
import { Context } from 'ponder:registry';

import { CONTRACT_ABIS, NETWORK_CONTRACTS } from '../config';
import { chainIdToChainName } from './chain';

/**
 * Handle max int adjustment for uint256
 * @param num - The number to adjust, must be a bigint
 * @returns The adjusted number
 */
export function handleMaxInt(num: bigint) {
  // TODO is there an alternative to this?
  return num > BigInt(2147483647)
    ? 2147483647 // Use PostgreSQL integer max if the value is too large
    : Number(num);
}

/**
 * Get the local hat level for a given hat id
 * @param context - The context object, uses `context.client` to get the web3 client
 * @param hatId - The hat id
 * @returns The local hat level
 */
export async function hatLevelLocal(context: Context, hatId: string): Promise<number> {
  const { client } = context;
  const chainName = chainIdToChainName(context.chain.id as number);
  if (!chainName) {
    throw new Error('Chain not found');
  }
  const address = NETWORK_CONTRACTS[chainName]?.Hats?.address;
  if (!address) {
    throw new Error('Hats contract not found');
  }
  const localHatLevel = await client.readContract({
    abi: CONTRACT_ABIS.Hats,
    address,
    functionName: 'getLocalHatLevel',
    args: [hatIdHexToDecimal(hatId)],
  });
  return localHatLevel;
}
