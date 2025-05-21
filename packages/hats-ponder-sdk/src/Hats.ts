import { ponder } from 'ponder:registry';
import { hat } from '../ponder.schema';

// Handle HatCreated events from both networks
ponder.on('Hats:HatCreated', async ({ event, context }) => {
  const { id, details, maxSupply, eligibility, toggle, mutable_, imageURI } =
    event.args;

  // Convert hatId to hex the same way as the subgraph
  const hatIdHex = '0x' + id.toString(16).padStart(64, '0');

  // Convert maxSupply to a safe integer that PostgreSQL can handle
  const safeMaxSupply =
    maxSupply > BigInt(2147483647)
      ? 2147483647 // Use PostgreSQL integer max if the value is too large
      : Number(maxSupply);

  console.log('Indexing hat with chainId:', context.chain.id);

  await context.db
    .insert(hat)
    .values({
      id: hatIdHex,
      ipId: id.toString(),
      chainId: Number(context.chain.id),
      details,
      maxSupply: safeMaxSupply,
      eligibility,
      toggle,
      mutable: mutable_,
      imageUri: imageURI,
      createdAt: event.block.timestamp.toString(),
    })
    .onConflictDoNothing();
});

// Handle HatDetailsChanged events from both networks
ponder.on('Hats:HatDetailsChanged', async ({ event, context }) => {
  const { hatId, newDetails } = event.args;
  // Convert hatId to hex the same way as the subgraph
  const hatIdHex = '0x' + hatId.toString(16).padStart(64, '0');

  await context.db
    .insert(hat)
    .values({
      id: hatIdHex,
      chainId: Number(context.chain.id),
      details: newDetails,
    })
    .onConflictDoUpdate((existing) => ({
      details: newDetails,
    }));
});

// Handle HatEligibilityChanged events from both networks
ponder.on('Hats:HatEligibilityChanged', async ({ event, context }) => {
  const { hatId, newEligibility } = event.args;

  // Convert hatId to hex the same way as the subgraph
  const hatIdHex = '0x' + hatId.toString(16).padStart(64, '0');

  await context.db
    .insert(hat)
    .values({
      id: hatIdHex,
      chainId: Number(context.chain.id),
      eligibility: newEligibility,
    })
    .onConflictDoUpdate((existing) => ({
      eligibility: newEligibility,
    }));
});
