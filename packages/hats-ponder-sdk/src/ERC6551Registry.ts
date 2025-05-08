import { ponder } from 'ponder:registry';

ponder.on(
  'ERC6551Registry:ERC6551AccountCreated',
  async ({ event, context }) => {
    console.log(event.args);
  }
);
