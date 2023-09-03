/**
 * Resolvers define how to fetch the types defined in your schema.
 * Resolvers are basically a functions that are used to handle 
   any incoming request and return data to the clients.
 */
import dataSource from './_data-source.js';

const resolvers = {
    // Resolver functions for type 'Query' defined in schema-defs.js [NOTE: word 'Query' is case-sensitive]
    Query: {
        /**
         * Write resolvers function for each properties defined in root 'Query' type
         * Resolvers functions by default accept 4 parameters
         * @param {*} parent - The parent data object
         * @param {*} args - object that contains all GraphQL arguments pass in schema-definition 
         * @param {*} contextValue 
         * @param {*} info 
         * @returns single array that satisfy the condition defined in JS Array.find() prototype method.
         */
        trainers() {
            // This statement will return all trainers & its all columns data,
            // and then the ApolloServer will run it magic of filtering the column
            // to display only the fields requested by users + 
            // also avoiding the disclosure of any extra fields that are there 
            // but not defined in {typeDefs} schema.
            return dataSource.trainers;
        },
        pokemons() {
            return dataSource.pokemons;
        },
        competitions() {
            return dataSource.competitions;
        },

        trainer(parent, args, contextValue, info) {
            // console.log(parent, args, contestValue, info);
            return dataSource.trainers.find( trainer =>  trainer.id === parseInt(args.id) );
        },
        pokemon(_, args) {
            return dataSource.pokemons.find( pokemon => pokemon.id === parseInt(args.id) );
        },
        competition(_, args) {
            return dataSource.competitions.find( competition => competition.id === parseInt(args.id) );
        }
    },

    // Resolver functions for type 'Trainer' defined in schema-defs.js
    Trainer: {
        pokemons(parent) {
            const trainerPokemonList = dataSource.pokemons.filter( pokemon => pokemon.trainer_id == parent.id );
            return trainerPokemonList;
        },
        competitions(parent) {
            const trainerCompetitionList = dataSource.competitions.filter( comp => comp.winner_trainer_id == parent.id );
            return trainerCompetitionList;
        }
    }
};

export default resolvers;