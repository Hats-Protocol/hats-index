import { ponder } from 'ponder:registry';

ponder.on(
  'ModuleProxyFactory:ModuleProxyCreation',
  async ({ event, context }) => {
    console.log(event.args);
  }
);
