const trainers = [
    { id: 1, name: "Ash Ketchum", country: "Pallet Town", age: 10, badge_active: true },
    { id: 2, name: "Misty", country: "Cerulean City", age: 10, badge_active: true },
    { id: 3, name: "Brock", country: "Pewter City", age: 15, badge_active: true }
];

const pokemons = [
    { id: 1, name: "Pikachu", color: "yellow", special_power: "Electricity", level: 5, trainer_id: 1 },
    { id: 2, name: "Squirtle", color: "blue", special_power: "Water", level: 3, trainer_id: 1 },
    { id: 3, name: "Bulbasaur", color: "green", special_power: "Grass", level: 2, trainer_id: 1 },
    { id: 4, name: "Staryu", color: "blue", special_power: "Star", level: 4, trainer_id: 2 },
    { id: 5, name: "Goldeen", color: "gold", special_power: "Water", level: 2, trainer_id: 2 },
    { id: 6, name: "Onix", color: "gray", special_power: "Rock", level: 5, trainer_id: 3 },
    { id: 7, name: "Geodude", color: "gray", special_power: "Rock", level: 3, trainer_id: 3 }
];

const competitions = [
    { id: 1, name: "Pokémon League", date: "2023-09-03", location: "Pallet Town", winner_trainer_id: 1 },
    { id: 2, name: "Gym Challenge", date: "2023-09-10", location: "Cerulean City", winner_trainer_id: 2 },
    { id: 3, name: "Kanto League", date: "2023-09-17", location: "Viridian City", winner_trainer_id: 3 },
    { id: 4, name: "Pokémon World Championships", date: "2023-10-01", location: "Vermillion City", winner_trainer_id: 1 },
    { id: 5, name: "Battle Frontier", date: "2023-10-15", location: "Fuchsia City", winner_trainer_id: null }
];

export default { trainers, pokemons, competitions };
