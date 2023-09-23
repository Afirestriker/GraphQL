# GraphQL
GraphQL. A Query language for APIs. Fixed the over-fetching and under-fetching of data. Ask for what you need and get just you wanted.

## Prerequisites
  - Node version 13.14.0 and above.
  - Package-2: `@apollo/server`
  - Package-1: `grpahql`

## Installation
  - ```
    npm init --yes
    ```
  - ```
    npm pck set type = "module"
    ```
  - ```
    npm install @apollo/server  graphql
    ```
  - ```
    npm start
    ```
  - Visit `http://localhost:4000` in your browser, which will open the Apollo Sandbox

## File Structure
  - src
    - index.js
    - schema-defs.js    (Define the graphQL query data structure that user/client can query)
    - resolver-funs.js  (GraphQL Query functions. Resolvers tell Apollo Server how to fetch the data associated with a particular type)
    - _data-source.js   (Data Source - Table Structure & Data)

## Data-Source SCHEMA
### The trainers table stores information about the trainers.

    - id: The unique identifier for the trainer.
    - name: The name of the trainer.
    - country: The country where the trainer is from.
    - age: The age of the trainer.
    - badge_active: Is trainer badget updated and verified

    ```Sql
    CREATE TABLE trainers (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        country VARCHAR(255) NOT NULL,
        age INT NOT NULL,
        badge_active ENUM('true', 'false') DEFAULT 'false' NOT NULL,
        PRIMARY KEY (id)
    );
    ```

### The pokemons table stores information about the pokemons.

    - id: The unique identifier for the pokemon.
    - name: The name of the pokemon.
    - color: The color of the pokemon.
    - special_power: The special power of the pokemon.
    - level: The level of the pokemon.
    - trainer_id: The id of the trainer who owns the pokemon.

    ```sql
    CREATE TABLE pokemons (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        color VARCHAR(255) NOT NULL,
        special_power VARCHAR(255) NOT NULL,
        level INT NOT NULL,
        trainer_id INT NOT NULL,
        PRIMARY KEY (id)
    );
    ```

### The competitions table stores information about the competitions.

    - id: The unique identifier for the competition.
    - name: The name of the competition.
    - date: The date of the competition.
    - location: The location of the competition.
    - winner_trainer_id: The id of the winner of the competition.

    ```sql
    CREATE TABLE competitions (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        date DATE NOT NULL,
        location VARCHAR(255) NOT NULL,
        winner_trainer_id INT NOT NULL,
        PRIMARY KEY (id)
    );
    ```
