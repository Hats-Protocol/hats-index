import { ponder } from 'ponder:registry';

ponder.on(
  'HatsSignerGateFactory:HatsSignerGateSetup',
  async ({ event, context }) => {
    console.log(event.args);
  }
);

ponder.on(
  'HatsSignerGateFactory:MultiHatsSignerGateSetup',
  async ({ event, context }) => {
    console.log(event.args);
  }
);
