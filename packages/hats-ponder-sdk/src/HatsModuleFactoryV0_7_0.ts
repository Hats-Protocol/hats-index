import { ponder } from 'ponder:registry';

ponder.on(
  'HatsModuleFactoryV0_7_0:HatsModuleFactory_ModuleDeployed',
  async ({ event, context }) => {
    console.log(event.args);
  }
);
