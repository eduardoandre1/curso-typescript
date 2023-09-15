import dataBase from "database/pg";
import { Game } from "../protocols/game-protocol";

const games: Game[] = [];

function getGames() {
	return games;
}

async function createGame(game: Game) {
	games.push(game);
	await dataBase.query<Game>(`INSERT INTO games (name, value) VALUES ($1, $2)`,[game.name, game.value]);
}

function getGameByTitleAndPlatform(game: Game) {
	return games.find(({ name, value }) => {
		return game.name === name && game.value === value;
	})
}

const gamesRepository = {
	getGames,
	getGameByTitleAndPlatform,
	createGame
}

export default gamesRepository;