import crypto from "crypto";
import { Context } from "ponder:registry";
import { getAddress } from "viem";

import { hatEvent, hatWearer, wearer } from "../ponder.schema";

export async function giveHat(context: Context, hatId: string, wearerId: string): Promise<void> {
  // if wearer does not exist, create new
  let w = await context.db.find(wearer, { id: getAddress(wearerId) });
  if (!w) {
    w = await context.db.insert(wearer).values({ id: getAddress(wearerId) });
  }
  // add wearer to the hat-wearers table
  await context.db.insert(hatWearer).values({
    id: crypto.randomUUID(),
    hatId,
    chainId: Number(context.chain.id),
    wearerId,
  });

  // create new HatMintedEvent
  await context.db.insert(hatEvent).values({
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
  await context.db.delete(hatWearer, { hatId, chainId: Number(context.chain.id), wearerId });

  // create new HatBurnedEvent
  await context.db.insert(hatEvent).values({
    id: crypto.randomUUID(),
    chainId: Number(context.chain.id),
    hatId,
    event: "HatBurned",
    eventData: JSON.stringify({ wearerId }),
  });
}
