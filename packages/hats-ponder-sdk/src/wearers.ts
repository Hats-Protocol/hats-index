import { getAddress } from 'viem';
import { Context } from 'ponder:registry';
import { hats, hatWearers, wearers } from '../ponder.schema';

export function giveHat(context: Context, hatId: string, wearerId: string): void {
  // if wearer not exist, create new
  let wearer = context.db.find(wearers, { id: getAddress(wearerId) });
  if (!wearer) {
    wearer = context.db.insert(wearers).values({ id: getAddress(wearerId) });
  }
  // add wearer to the hat-wearers table
  context.db.insert(hatWearers).values({
    id: getAddress(wearerId),
    hatId,
    chainId: context.chain.id,
    wearerId,
  });

  // TODO create new HatMintedEvent
}

export function removeHat(context: Context, hatId: string, wearerId: string): void {
  // remove the wearer from the hat wearers array
  // create new HatBurnedEvent
}
