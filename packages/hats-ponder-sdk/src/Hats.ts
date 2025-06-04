import { hatIdDecimalToHex, hatIdDecimalToIp, hatIdToTreeId } from "@hatsprotocol/sdk-v1-core";
import crypto from "crypto";
import { Context, Event } from "ponder:registry";
import { zeroAddress } from "viem";

import { badStanding, hat, hatEvent, tree, treeHat } from "../ponder.schema";
import { handleMaxInt, hatLevelLocal } from "./utils";
import { giveHat, removeHat } from "./wearers";

export const processHatCreated = async ({ event, context }: { event: Event; context: Context }) => {
  const { id, details, maxSupply, eligibility, toggle, mutable_, imageURI } = event.args;

  const levelAtLocalTree = await hatLevelLocal(context, id);

  // TODO can we check the level at local tree and only create on new trees?
  // create new tree if this is a top hat
  if (levelAtLocalTree === 0) {
    const t = await context.db.find(tree, { id: hatIdToTreeId(BigInt(id)) });
    if (!t) {
      await context.db.insert(tree).values({
        id: hatIdToTreeId(BigInt(id)),
        chainId: Number(context.chain.id),
        createdAt: event.block.timestamp.toString(),
      });
    }
  }

  // create new hat
  await context.db
    .insert(hat)
    .values({
      id: hatIdDecimalToHex(id),
      ipId: hatIdDecimalToIp(id),
      chainId: Number(context.chain.id),
      details,
      maxSupply: handleMaxInt(maxSupply),
      eligibility,
      toggle,
      mutable: mutable_,
      imageUri: imageURI,
      levelAtLocalTree,
      currentSupply: 0,
      createdAt: event.block.timestamp.toString(),
    })
    .onConflictDoNothing();

  // add hat to tree
  await context.db.insert(treeHat).values({
    id: crypto.randomUUID(),
    chainId: Number(context.chain.id),
    hatId: hatIdDecimalToHex(id),
    treeId: hatIdToTreeId(BigInt(id)),
    createdAt: event.block.timestamp.toString(),
  });
};

export const processHatDetailsChanged = async ({ event, context }: { event: Event; context: Context }) => {
  const { hatId, newDetails } = event.args;

  // update hat details
  await context.db.update(hat, { id: hatIdDecimalToHex(hatId) }).set({ details: newDetails });

  // create new HatDetailsChangedEvent
  await context.db.insert(hatEvent).values({
    id: crypto.randomUUID(),
    chainId: Number(context.chain.id),
    hatId: hatIdDecimalToHex(hatId),
    event: "HatDetailsChanged",
    eventData: JSON.stringify({ newDetails }),
  });
};

export const processHatEligibilityChanged = async ({ event, context }: { event: Event; context: Context }) => {
  const { hatId, newEligibility } = event.args;

  // update hat eligibility
  await context.db.update(hat, { id: hatIdDecimalToHex(hatId) }).set({ eligibility: newEligibility });

  // create new HatEligibilityChangedEvent
  await context.db.insert(hatEvent).values({
    id: crypto.randomUUID(),
    chainId: Number(context.chain.id),
    hatId: hatIdDecimalToHex(hatId),
    event: "HatEligibilityChanged",
    eventData: JSON.stringify({ newEligibility }),
  });
};

export const processHatStatusChanged = async ({ event, context }: { event: Event; context: Context }) => {
  const { hatId, newStatus } = event.args;

  // update hat status
  await context.db.update(hat, { id: hatIdDecimalToHex(hatId) }).set({ status: newStatus });

  // create new HatStatusChangedEvent
  await context.db.insert(hatEvent).values({
    id: crypto.randomUUID(),
    chainId: Number(context.chain.id),
    hatId: hatIdDecimalToHex(hatId),
    event: "HatStatusChanged",
    eventData: JSON.stringify({ newStatus }),
  });
};

export const processHatToggleChanged = async ({ event, context }: { event: Event; context: Context }) => {
  const { hatId, newToggle } = event.args;

  // update hat toggle
  await context.db.update(hat, { id: hatIdDecimalToHex(hatId) }).set({ toggle: newToggle });

  // create new HatToggleChangedEvent
  await context.db.insert(hatEvent).values({
    id: crypto.randomUUID(),
    chainId: Number(context.chain.id),
    hatId: hatIdDecimalToHex(hatId),
    event: "HatToggleChanged",
    eventData: JSON.stringify({ newToggle }),
  });
};

export const processHatMutabilityChanged = async ({ event, context }: { event: Event; context: Context }) => {
  const { hatId, newMutability } = event.args;

  // update hat mutability
  await context.db.update(hat, { id: hatIdDecimalToHex(hatId) }).set({ mutable: newMutability });

  // create new HatMutabilityChangedEvent
  await context.db.insert(hatEvent).values({
    id: crypto.randomUUID(),
    chainId: Number(context.chain.id),
    hatId: hatIdDecimalToHex(hatId),
    event: "HatMutabilityChanged",
    eventData: JSON.stringify({ newMutability }),
  });
};

export const processHatMaxSupplyChanged = async ({ event, context }: { event: Event; context: Context }) => {
  const { hatId, newMaxSupply } = event.args;

  // update hat max supply
  await context.db.update(hat, { id: hatIdDecimalToHex(hatId) }).set({ maxSupply: newMaxSupply });

  // create new HatMaxSupplyChangedEvent
  await context.db.insert(hatEvent).values({
    id: crypto.randomUUID(),
    chainId: Number(context.chain.id),
    treeId: hatIdToTreeId(BigInt(hatId)),
    hatId: hatIdDecimalToHex(hatId),
    event: "HatMaxSupplyChanged",
  });
};

export const processHatImageURIChanged = async ({ event, context }: { event: Event; context: Context }) => {
  const { hatId, newImageURI } = event.args;

  // update hat image URI
  await context.db.update(hat, { id: hatIdDecimalToHex(hatId) }).set({ imageUri: newImageURI });

  // create new HatImageURIChangedEvent
  await context.db.insert(hatEvent).values({
    id: crypto.randomUUID(),
    chainId: Number(context.chain.id),
    hatId: hatIdDecimalToHex(hatId),
    event: "HatImageURIChanged",
  });
};

export const processTransferSingle = async ({ event, context }: { event: Event; context: Context }) => {
  const { id, from, to } = event.args;

  if (from != zeroAddress && to != zeroAddress) {
    //transfer event
    await giveHat(context, hatIdDecimalToHex(id), to);
    await removeHat(context, hatIdDecimalToHex(id), from);
  } else if (from == zeroAddress && to != zeroAddress) {
    // mint event
    await giveHat(context, hatIdDecimalToHex(id), to);
  } else if (from != zeroAddress && to == zeroAddress) {
    // burn event
    await removeHat(context, hatIdDecimalToHex(id), from);
  }
};

export const processWearerStandingChanged = async ({ event, context }: { event: Event; context: Context }) => {
  const { hatId, wearerId, newWearerStanding } = event.args;
  console.log("Wearer standing changed", hatIdDecimalToIp(hatId), newWearerStanding);

  if (newWearerStanding === 0) {
    // remove wearer from bad standings
    await context.db.delete(badStanding, { hatId: hatIdDecimalToHex(hatId), wearerId });
  } else {
    // add wearer to bad standings
    await context.db.insert(badStanding).values({
      id: crypto.randomUUID(),
      hatId: hatIdDecimalToHex(hatId),
      chainId: Number(context.chain.id),
      wearerId,
      standing: newWearerStanding,
      createdAt: event.block.timestamp.toString(),
    });
  }

  // create new WearerStandingChangedEvent
  await context.db.insert(hatEvent).values({
    id: crypto.randomUUID(),
    chainId: Number(context.chain.id),
    hatId: hatIdDecimalToHex(hatId),
    treeId: hatIdToTreeId(BigInt(hatId)),
    event: "WearerStandingChanged",
    eventData: JSON.stringify({ wearerId, newWearerStanding }),
  });
};

// TODO handle linking of trees/hats
// export const processTopHatLinkRequested = async ({ event, context }: { event: Event; context: Context }) => {
//   const { hatId } = event.args;
//   console.log('Top hat link requested', hatIdDecimalToIp(hatId));

//   await context.db
//     .update(hats, { id: hatIdDecimalToHex(hatId) })
//     .set({ topHatLinkRequested: true });

//  // TODO create new TopHatLinkRequestedEvent
// };

// export const processTopHatLinked = async ({ event, context }: { event: Event; context: Context }) => {
//   const { hatId } = event.args;
//   console.log('Top hat linked', hatIdDecimalToIp(hatId));

//   await context.db
//     .update(hats, { id: hatIdDecimalToHex(hatId) })
//     .set({ topHatLinkRequested: true });

//   // TODO create new TopHatLinkedEvent
// };
