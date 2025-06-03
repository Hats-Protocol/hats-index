import { Context, Event, EventNames, ponder } from "ponder:registry";

ponder.on(
  "ModuleProxyFactory:ModuleProxyCreation" as EventNames,
  async ({ event, context }: { event: Event; context: Context }) => {
    console.log(event.args);
  },
);
