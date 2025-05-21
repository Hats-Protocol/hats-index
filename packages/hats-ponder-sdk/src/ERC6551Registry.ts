import { ponder, Event, Context } from 'ponder:registry';

ponder.on(
  'ERC6551Registry:ERC6551AccountCreated',
  async ({ event, context }: { event: Event; context: Context }) => {
    console.log(event.args);
  }
);
