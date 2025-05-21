import { ponder } from 'ponder:registry';
import {
  processHatCreated,
  processHatDetailsChanged,
  processHatEligibilityChanged,
  processHatToggleChanged,
  processHatStatusChanged,
  processHatMutabilityChanged,
  processHatMaxSupplyChanged,
  processHatImageURIChanged,
  processTransferSingle,
  // processTopHatLinkRequested,
  // processTopHatLinked,
} from './Hats';

// Export schema
export * from '../ponder.schema';
export * from './config';

// Handle HatCreated events on Hats.sol
ponder.on('Hats:HatCreated', processHatCreated);

// Handle HatDetailsChanged events on Hats.sol
ponder.on('Hats:HatDetailsChanged', processHatDetailsChanged);

// Handle HatEligibilityChanged events on Hats.sol
ponder.on('Hats:HatEligibilityChanged', processHatEligibilityChanged);

// Handle WearerStandingChanged events on Hats.sol
// TODO how do we need to handle standing?
// ponder.on('Hats:WearerStandingChanged', processWearerStandingChanged);

// Handle HatStatusChanged events on Hats.sol
ponder.on('Hats:HatStatusChanged', processHatStatusChanged);

// Handle HatToggleChanged events on Hats.sol
ponder.on('Hats:HatToggleChanged', processHatToggleChanged);

// Handle HatMutabilityChanged events on Hats.sol
ponder.on('Hats:HatMutabilityChanged', processHatMutabilityChanged);

// Handle HatMaxSupplyChanged events on Hats.sol
ponder.on('Hats:HatMaxSupplyChanged', processHatMaxSupplyChanged);

// Handle HatImageURIChanged events on Hats.sol
ponder.on('Hats:HatImageURIChanged', processHatImageURIChanged);

// Handle TransferSingle events on Hats.sol
ponder.on('Hats:TransferSingle', processTransferSingle);

// Handle TopHatLinkRequested events on Hats.sol
// ponder.on('Hats:TopHatLinkRequested', processTopHatLinkRequested);

// Handle TopHatLinked events on Hats.sol
// ponder.on('Hats:TopHatLinked', processTopHatLinked);
