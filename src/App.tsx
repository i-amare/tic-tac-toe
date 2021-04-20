import Grid from './Components/Grid';
import ScoreBoard from './Components/Scoreboard';
import Footer from './Components/Footer';
import './Styles/App.css';
import { useState } from 'react';
import Vendor from './Scripts/Vendor';
import Player from './Scripts/Player';

interface scoreBoard {
	o: number;
	'=': number;
	x: number;
}

/**
 * A tic-tac-toe app the supports offline PvP(current), PvE(will be added soon) and online PvP(will be added soon)
 * @returns A tic-tac-toe app
 */
const App = () => {
	const [gridState, setGridState] = useState([
		['', '', ''],
		['', '', ''],
		['', '', ''],
	]);

	const [scoreState, setScoreState] = useState({
		o: 0,
		'=': 0,
		x: 0,
	});

	const [currentPlayerState, setCurrentPlayerState] = useState('x');

	const [gameState, setGameState] = useState(true);

	/**
	 * Handles a click on a tile
	 * @param rowIdx The tiles x co-ord
	 * @param colIdx The tiles y co-ord
	 */
	const onTileClick = (rowIdx: number, colIdx: number) => {
		// Blocks moves on tile if the tile is already occupied
		if (!gridState[rowIdx][colIdx] && gameState) {
			makeMove(rowIdx, colIdx);
		}
	};

	/**
	 * Makes the AI's move
	 */
	const playAI = () => {
		let newGrid = [...gridState];
		const move = Player.move(newGrid, currentPlayerState);
		makeMove(move[0], move[1]);
	};

	/**
	 * Makes a move on the board and switches the current player
	 * @param rowIdx The tiles x co-ord
	 * @param colIdx The tiles y co-ord
	 */
	const makeMove = (rowIdx: number, colIdx: number) => {
		// Ends the function if the move is invalid
		if (gridState[rowIdx][colIdx]) {
			return;
		}
		// Updates gridState to reflect the move made
		let newGridState = [...gridState];
		newGridState[rowIdx][colIdx] = currentPlayerState;
		setGridState(newGridState);
		// Checks for any potential updates to the game state and updates the score
		if (Vendor.checkWin(gridState)) {
			updateScore(`${currentPlayerState}`);
		} else if (Vendor.checkDraw(gridState)) {
			updateScore('=');
		}
		// Changes the current player
		setCurrentPlayerState(currentPlayerState === 'x' ? 'o' : 'x');
	};

	/**
	 * Updates the game score
	 * @param score The key of the score that will be updated
	 */
	const updateScore = (score: String) => {
		let newScore = scoreState;
		newScore[score as keyof scoreBoard] += 1;
		setScoreState(newScore);
		setGameState(false);
	};

	/**
	 * Restarts the game and clears the board
	 */
	const resetGame = () => {
		setGridState([
			['', '', ''],
			['', '', ''],
			['', '', ''],
		]);
		setCurrentPlayerState('x');
		setGameState(true);
	};

	return (
		<div className='App'>
			<ScoreBoard score={scoreState} />
			<Grid gridState={gridState} onTileClick={onTileClick} />
			<Footer resetGame={resetGame} playAI={playAI} />
		</div>
	);
};

export default App;
