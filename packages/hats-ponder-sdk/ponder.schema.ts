import { onchainTable } from 'ponder';

export const hat = onchainTable('hat', (t) => ({
  id: t.text().primaryKey(),
  ipId: t.text(),
  chainId: t.integer(),
  details: t.text(),
  maxSupply: t.integer(),
  eligibility: t.text(),
  toggle: t.text(),
  mutable: t.boolean(),
  imageUri: t.text(),
  createdAt: t.text(),
}));

export const hatEvent = onchainTable('hatEvent', (t) => ({
  id: t.text().primaryKey(),
  chainId: t.integer(),
  hatId: t.text(),
  event: t.text(),
  eventData: t.text(),
}));

export const wearer = onchainTable('wearer', (t) => ({
  id: t.text().primaryKey(),
  chainId: t.integer(),
  hatId: t.text(),
  wearer: t.text(),
  status: t.text(),
}));

export const module = onchainTable('module', (t) => ({
  id: t.text().primaryKey(),
  chainId: t.integer(),
  hatId: t.text(),
  implementation: t.text(),
  moduleType: t.text(),
}));
