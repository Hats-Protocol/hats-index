import { onchainTable } from 'ponder';

export const hats = onchainTable('hats', (t) => ({
  id: t.text().primaryKey(),
  ipId: t.text(),
  adminId: t.text(),
  treeId: t.text(),
  chainId: t.integer(),
  details: t.text(),
  maxSupply: t.integer(),
  eligibility: t.text(),
  toggle: t.text(),
  mutable: t.boolean(),
  imageUri: t.text(),
  status: t.boolean().default(true),
  levelAtLocalTree: t.integer(),
  currentSupply: t.integer(),
  createdAt: t.text(),
}));

export const badStandings = onchainTable('badStandings', (t) => ({
  id: t.text().primaryKey(),
  chainId: t.integer(),
  hatId: t.text(),
  wearerId: t.text(),
  standing: t.text(),
  createdAt: t.text(),
}));

export const hatEvents = onchainTable('hatEvents', (t) => ({
  id: t.text().primaryKey(),
  chainId: t.integer(),
  hatId: t.text(),
  event: t.text(),
  eventData: t.text(),
  createdAt: t.text(),
}));

export const hatWearers = onchainTable('hatWearers', (t) => ({
  id: t.text().primaryKey(),
  chainId: t.integer(),
  hatId: t.text(),
  wearerId: t.text(),
}));

export const wearers = onchainTable('wearers', (t) => ({
  id: t.text().primaryKey(),
  chainId: t.integer(),
  hatId: t.text(),
  wearer: t.text(),
  status: t.text(),
}));

export const modules = onchainTable('modules', (t) => ({
  id: t.text().primaryKey(),
  chainId: t.integer(),
  hatId: t.text(),
  implementation: t.text(),
  moduleType: t.text(),
}));
