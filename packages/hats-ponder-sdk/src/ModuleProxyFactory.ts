import { ponder, Event, Context } from 'ponder:registry';

ponder.on(
  'ModuleProxyFactory:ModuleProxyCreation',
  async ({ event, context }: { event: Event; context: Context }) => {
    console.log(event.args);
  }
);
