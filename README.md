# Hats Indexer

This project consists of a Hats Protocol indexing SDK built with [**Ponder**](https://ponder.sh/) and a consumer application that demonstrates how to consume the Hats Ponder SDK. The **consumer** package contains the environment variables for the RPC and also the Docker configuration. The **hats-ponder-sdk** package is where the indexing logic happens, which is exported and used in the **consumer**.
The project uses a monorepo structure managed with pnpm workspaces.

## Project Structure

```
hats-indexer/
├── packages/
│   ├── hats-ponder-sdk/    # Core indexing SDK for Hats Protocol
│   └── consumer/           # Example consumer application
```

## Prerequisites

- Node.js >= 18.14
- pnpm >= 8.0.0
- Docker and Docker Compose

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd hats-indexer
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

## Building the SDK

To build the Hats Ponder SDK:

```
pnpm sdk:build
```

## Configuring the SDK

All of the Ponder configuration is managed in the `hats-ponder-sdk` package. The core configuration is in the `ponder.config.ts`. This exports the `createConfig` which is then used in the `consumer` package's `ponder.config.ts`. This enables a modular approach where our Ponder indexing configuration can be imported into other existing Ponder applications.

The schema and API files follow the same pattern. This is still experimental and we're working out the rough edges, but initial tests have demonstrated that this works.

### Multichain Support

Ponder provides powerful multichain support functionality. Our SDK follows the patterns outlined for use in Ponder versions `>0.10.x`. There were significant changes to Ponder's internal API outlined in the [Ponder Migration Guide](https://ponder.sh/docs/migration-guide).

### Start Blocks

While testing and developing, the start blocks are set to be rather recent. This is managed in the `ponder.config.ts` within the `hats-ponder-sdk` package. The `startBlock` can be set for each contract/chain independently.

## Initial Indexing

Ponder >0.10 relies on the `onChainTable` function for the core indexing. Since we're still actively developing and testing, the indexing logic focuses primarily on the `hat` table creation.

## Running the Consumer

The consumer application can be run using Docker Compose for a consistent environment:

1. Start the services:

   ```bash
   # If running from the root directory:
   docker-compose -f packages/consumer/docker/docker-compose.yml up -d

   # If running in the `docker` directory:
   cd packages/consumer/docker
   docker-compose up -d
   ```

To run the consumer in development mode:

```bash
pnpm consumer:dev
```

## Development

- The SDK (`packages/hats-ponder-sdk`) provides the core indexing functionality for the Hats Protocol
- The consumer (`packages/consumer`) demonstrates how to use the SDK in a real application

## Scripts

- `pnpm sdk:build`: Build the SDK
- `pnpm consumer:dev`: Run the **consumer** in development mode
