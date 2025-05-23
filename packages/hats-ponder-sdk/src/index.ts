import { EventNames, ponder } from 'ponder:registry';

import {
  processHatCreated,
  processHatDetailsChanged,
  processHatEligibilityChanged,
  processHatImageURIChanged,
  processHatMaxSupplyChanged,
  processHatMutabilityChanged,
  processHatStatusChanged,
  processHatToggleChanged,
  processTransferSingle,
  // processTopHatLinkRequested,
  // processTopHatLinked,
} from './Hats';

// Export schema
export * from '../ponder.schema';
export * from './config';

// Handle HatCreated events on Hats.sol
ponder.on('Hats:HatCreated' as EventNames, processHatCreated);

// Handle HatDetailsChanged events on Hats.sol
ponder.on('Hats:HatDetailsChanged' as EventNames, processHatDetailsChanged);

// Handle HatEligibilityChanged events on Hats.sol
ponder.on('Hats:HatEligibilityChanged' as EventNames, processHatEligibilityChanged);

// Handle WearerStandingChanged events on Hats.sol
// TODO how do we need to handle standing?
// ponder.on('Hats:WearerStandingChanged' as EventNames, processWearerStandingChanged);

// Handle HatStatusChanged events on Hats.sol
ponder.on('Hats:HatStatusChanged' as EventNames, processHatStatusChanged);

// Handle HatToggleChanged events on Hats.sol
ponder.on('Hats:HatToggleChanged' as EventNames, processHatToggleChanged);

// Handle HatMutabilityChanged events on Hats.sol
ponder.on('Hats:HatMutabilityChanged' as EventNames, processHatMutabilityChanged);

// Handle HatMaxSupplyChanged events on Hats.sol
ponder.on('Hats:HatMaxSupplyChanged' as EventNames, processHatMaxSupplyChanged);

// Handle HatImageURIChanged events on Hats.sol
ponder.on('Hats:HatImageURIChanged' as EventNames, processHatImageURIChanged);

// Handle TransferSingle events on Hats.sol
ponder.on('Hats:TransferSingle' as EventNames, processTransferSingle);

// Handle TopHatLinkRequested events on Hats.sol
// ponder.on('Hats:TopHatLinkRequested' as EventNames, processTopHatLinkRequested);

// Handle TopHatLinked events on Hats.sol
// ponder.on('Hats:TopHatLinked' as EventNames, processTopHatLinked);
