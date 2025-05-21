import { ponder, Event, Context } from 'ponder:registry';

ponder.on(
  'HatsModuleFactoryV0_6_0:HatsModuleFactory_ModuleDeployed',
  async ({ event, context }: { event: Event; context: Context }) => {
    console.log(event.args);
  }
);
