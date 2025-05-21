import { ponder, Event, Context } from 'ponder:registry';

ponder.on(
  'HatsSignerGateFactory:HatsSignerGateSetup',
  async ({ event, context }: { event: Event; context: Context }) => {
    console.log(event.args);
  }
);

ponder.on(
  'HatsSignerGateFactory:MultiHatsSignerGateSetup',
  async ({ event, context }: { event: Event; context: Context }) => {
    console.log(event.args);
  }
);
