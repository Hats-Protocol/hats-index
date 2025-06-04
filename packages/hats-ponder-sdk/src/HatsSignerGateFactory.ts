import { Context, Event, EventNames, ponder } from "ponder:registry";

ponder.on(
  "HatsSignerGateFactory:HatsSignerGateSetup" as EventNames,
  async ({ event, context }: { event: Event; context: Context }) => {
    console.log(event.args);
  },
);

ponder.on(
  "HatsSignerGateFactory:MultiHatsSignerGateSetup" as EventNames,
  async ({ event, context }: { event: Event; context: Context }) => {
    console.log(event.args);
  },
);
