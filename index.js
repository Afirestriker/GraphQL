import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import typeDefs from './schema-defs.js';
import resolvers from './resolver-funs.js';

/**
 * The ApolloServer constructor required one object parameter with two properties.
 * 1. typeDefs -- Schema. I.e., A collection of type definitions (hence "typeDefs").
 * 2. resolvers -- Methods. Resolvers define how to fetch the 'types' defined in your schema.
 */
const server = new ApolloServer({
    typeDefs,
    resolvers
});

/**
 * Start the Apollo server and listen on port: 4000.
 */
const { URL } = await startStandaloneServer(server, {
    listen: {port: 4000}
});

console.log(`Server Ready for Launch 🚀 at ${URL}`, 4000);
