-- Create extensions if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create a schema for the Ponder app
CREATE SCHEMA IF NOT EXISTS hats_indexer;

-- Grant privileges to the ponder user
GRANT ALL PRIVILEGES ON SCHEMA hats_indexer TO ponder;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA hats_indexer TO ponder; 