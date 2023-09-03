/**
 * The { ID, Int, Float, String, Boolean } are all the built-in graphQL data-tpe.
   [String]! --means that an array is mandatory but can be empty.
   [String!]! --measn an array is mandatory and empty array is not allowed.

 * type "trainer" defines the queriable field from trainer table
   This also defines the fields that need to be set while add new entry to trainer table.
   The ! denotes the mandatory fields while adding new entry to trainer.

 * The "Query" type is special:  
   It is something that every GraphQL schema needs to have i.e mandatory, not optional
   Its jos is like a gate-keeping that's defined the "entry point" to the graph with the exit point of thoes entries.
   It lists all of the available queries that clients can execute, along with the return type for each
   For example: The "trainers" query property would returns an array of zero or more [Trainer].

 * Using '#' we can write comments in GraphQL
 */
const typeDefs = `#graphql
    type Trainer {
        id: ID!,
        name: String!,
        country: String!,
        age: Int!,
        badge_active: Boolean!
        
        pokemons: [Pokemon]
        competitions: [Competition]
    }
    type Pokemon {
        id: ID!,
        name: String!,
        color: String!,
        special_power: String!,
        level: Int!
        trainer_id: Int,
    }
    type Competition {
        id: ID!,
        name: String!,
        date: String!,
        location: String!,
        winner_trainer_id: Int
    }
    type Query {
        # fieldName: expected-return-type
        trainers: [Trainer],
        pokemons: [Pokemon],
        competitions: [Competition],

        # query based on id
        trainer(id: ID!): Trainer,
        pokemon(id: ID!): Pokemon,
        competition(id: ID!): Competition
    }
`;

export default typeDefs;