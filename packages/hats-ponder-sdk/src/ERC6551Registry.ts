import { Context, Event, EventNames, ponder } from "ponder:registry";

ponder.on(
  "ERC6551Registry:ERC6551AccountCreated" as EventNames,
  async ({ event, context }: { event: Event; context: Context }) => {
    console.log(event.args);
  },
);
