import { hatIdDecimalToHex, hatIdDecimalToIp } from '@hatsprotocol/sdk-v1-core';
import { Event, Context } from 'ponder:registry';

import { hatEvents, hats } from '../ponder.schema';
import { CONTRACT_ABIS, NETWORK_CONTRACTS } from './config';
import { ChainName } from './types';
import { chainIdToChainName } from './utils';
function handleMaxInt(num: bigint) {
  // TODO is there an alternative to this?
  return num > BigInt(2147483647)
    ? 2147483647 // Use PostgreSQL integer max if the value is too large
    : Number(num);
};

async function hatLevelLocal(context: Context, hatId: string): Promise<number> {
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
    functionName: "getLocalHatLevel",
    args: [hatId],
  });
  return localHatLevel;
}

export const processHatCreated = async ({ event, context }: { event: Event; context: Context }) => {
  const { id, details, maxSupply, eligibility, toggle, mutable_, imageURI } =
    event.args;

  const levelAtLocalTree = await hatLevelLocal(context, id);

  await context.db
    .insert(hats)
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
};

export const processHatDetailsChanged = async ({ event, context }: { event: Event; context: Context }) => {
  const { hatId, newDetails } = event.args;
  console.log('Hat details changed', hatIdDecimalToIp(hatId), newDetails);

  await context.db
    .update(hats, { id: hatIdDecimalToHex(hatId) })
    .set({ details: newDetails });

  // TODO create new HatDetailsChangedEvent
};

export const processHatEligibilityChanged = async ({ event, context }: { event: Event; context: Context }) => {
  const { hatId, newEligibility } = event.args;
  console.log('Hat eligibility changed', hatIdDecimalToIp(hatId), newEligibility);
  await context.db
    .update(hats, { id: hatIdDecimalToHex(hatId) })
    .set({ eligibility: newEligibility });

  // TODO create new HatEligibilityChangedEvent
};


export const processHatStatusChanged = async ({ event, context }: { event: Event; context: Context }) => {
  const { hatId, newStatus } = event.args;
  console.log('Hat status changed', hatIdDecimalToIp(hatId), newStatus);

  await context.db
    .update(hats, { id: hatIdDecimalToHex(hatId) })
    .set({ status: newStatus });

  // TODO create new HatStatusChangedEvent
};

export const processHatToggleChanged = async ({ event, context }: { event: Event; context: Context }) => {
  const { hatId, newToggle } = event.args;
  console.log('Hat toggle changed', hatIdDecimalToIp(hatId), newToggle);

  await context.db
    .update(hats, { id: hatIdDecimalToHex(hatId) })
    .set({ toggle: newToggle });

  // TODO create new HatToggleChangedEvent
};

export const processHatMutabilityChanged = async ({ event, context }: { event: Event; context: Context }) => {
  const { hatId, newMutability } = event.args;
  console.log('Hat mutability changed', hatIdDecimalToIp(hatId), newMutability);

  await context.db
    .update(hats, { id: hatIdDecimalToHex(hatId) })
    .set({ mutability: newMutability });

  // TODO create new HatMutabilityChangedEvent
};

export const processHatMaxSupplyChanged = async ({ event, context }: { event: Event; context: Context }) => {
  const { hatId, newMaxSupply } = event.args;
  console.log('Hat max supply changed', hatIdDecimalToIp(hatId), newMaxSupply);

  await context.db
    .update(hats, { id: hatIdDecimalToHex(hatId) })
    .set({ maxSupply: newMaxSupply });

  // TODO create new HatMaxSupplyChangedEvent
};


export const processHatImageURIChanged = async ({ event, context }: { event: Event; context: Context }) => {
  const { hatId, newImageURI } = event.args;
  console.log('Hat image URI changed', hatIdDecimalToIp(hatId), newImageURI);

  await context.db
    .update(hats, { id: hatIdDecimalToHex(hatId) })
    .set({ imageUri: newImageURI });

  // TODO create new HatImageURIChangedEvent
};

export const processTransferSingle = async ({ event, context }: { event: Event; context: Context }) => {
  const { id, from, to } = event.args;
  console.log('Hat transferred', hatIdDecimalToIp(id), from, to);
  // TODO handle transfer events
  // await context.db
  //   .insert(hatEvents)
  //   .values({
  //     id: hatIdDecimalToHex(hatId),
  //     chainId: Number(context.chain.id),
  //     hatId: hatIdDecimalToHex(hatId),
  //   });

  // TODO create new HatMintedEvent
}

// export const processWearerStandingChanged = async ({ event, context }: { event: Event; context: Context }) => {
//   const { hatId, newWearerStanding } = event.args;
//   console.log('Wearer standing changed', hatIdDecimalToIp(hatId), newWearerStanding);

//   await context.db
//     .update(hats, { id: hatIdDecimalToHex(hatId) })
//     .set({ wearerStanding: newWearerStanding });

//  // TODO create new WearerStandingChangedEvent
// };

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
