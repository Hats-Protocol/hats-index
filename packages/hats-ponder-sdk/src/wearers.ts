import crypto from "crypto";
import { Context } from "ponder:registry";
import { getAddress } from "viem";

import { hatEvents, hatWearers, wearers } from "../ponder.schema";

export async function giveHat(context: Context, hatId: string, wearerId: string): Promise<void> {
  // if wearer does not exist, create new
  let wearer = context.db.find(wearers, { id: getAddress(wearerId) });
  if (!wearer) {
    wearer = context.db.insert(wearers).values({ id: getAddress(wearerId) });
  }
  // add wearer to the hat-wearers table
  await context.db.insert(hatWearers).values({
    id: crypto.randomUUID(),
    hatId,
    chainId: Number(context.chain.id),
    wearerId,
  });

  // create new HatMintedEvent
  await context.db.insert(hatEvents).values({
    id: crypto.randomUUID(),
    chainId: Number(context.chain.id),
    hatId,
    event: "HatMinted",
    eventData: JSON.stringify({ wearerId }),
  });
}

export async function removeHat(context: Context, hatId: string, wearerId: string): Promise<void> {
  // ? is there an instance where the wearer doesn't already exist?

  // remove the wearer from the hat-wearers table
  await context.db.delete(hatWearers, { hatId, chainId: Number(context.chain.id), wearerId });

  // create new HatBurnedEvent
  await context.db.insert(hatEvents).values({
    id: crypto.randomUUID(),
    chainId: Number(context.chain.id),
    hatId,
    event: "HatBurned",
    eventData: JSON.stringify({ wearerId }),
  });
}
