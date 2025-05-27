import { Context, Event, EventNames, ponder } from 'ponder:registry';

ponder.on(
  'HatsModuleFactoryV0_6_0:HatsModuleFactory_ModuleDeployed' as EventNames,
  async ({ event, context }: { event: Event; context: Context }) => {
    console.log(event.args);
  },
);
