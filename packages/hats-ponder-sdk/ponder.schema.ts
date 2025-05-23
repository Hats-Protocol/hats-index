import { onchainTable } from 'ponder';

export const hats = onchainTable(
  'hats',
  (t) => ({
    id: t.text().primaryKey(),
    ipId: t.text(),
    adminId: t.text(),
    treeId: t.integer(),
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
  }),
  (t) => ({
    unique: [t.chainId, t.id],
  }),
);

export const trees = onchainTable(
  'trees',
  (t) => ({
    id: t.integer().primaryKey(),
    chainId: t.integer(),
    createdAt: t.text(),
  }),
  (t) => ({
    unique: [t.chainId, t.id],
  }),
);

export const treeHats = onchainTable(
  'treeHats',
  (t) => ({
    id: t.text().primaryKey(),
    chainId: t.integer(),
    hatId: t.text(),
    treeId: t.integer(),
    createdAt: t.text(),
  }),
  (t) => ({
    unique: [t.chainId, t.hatId, t.treeId],
  }),
);

export const badStandings = onchainTable(
  'badStandings',
  (t) => ({
    id: t.text().primaryKey(),
    chainId: t.integer(),
    hatId: t.text(),
    wearerId: t.text(),
    standing: t.text(),
    createdAt: t.text(),
  }),
  (t) => ({
    index: [t.chainId, t.hatId, t.wearerId],
  }),
);

export const hatEvents = onchainTable('hatEvents', (t) => ({
  id: t.text().primaryKey(),
  chainId: t.integer(),
  hatId: t.text(),
  treeId: t.integer(),
  event: t.text(),
  eventData: t.text(),
  createdAt: t.text(),
}));

export const hatWearers = onchainTable(
  'hatWearers',
  (t) => ({
    id: t.text().primaryKey(),
    chainId: t.integer(),
    hatId: t.text(),
    wearerId: t.text(),
  }),
  (t) => ({
    unique: [t.chainId, t.hatId, t.wearerId],
  }),
);

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
