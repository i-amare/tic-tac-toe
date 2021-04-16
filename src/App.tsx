import Grid from './Components/Grid';
import ScoreBoard from './Components/Scoreboard';
import Footer from './Components/Footer';
import './Styles/App.css';
import { useState } from 'react';
import Vendor from './Scripts/vendor';

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
		if (gridState[rowIdx][colIdx] || !gameState) {
			return null;
		}
		// Makes the move
		updateGridState(rowIdx, colIdx);
		// Checks for any potential updates to the game state
		// Updates the score of the game
		if (Vendor.checkWin(gridState)) {
			updateScore(`${currentPlayerState}`);
		} else if (Vendor.checkDraw(gridState)) {
			updateScore('=');
		}
		// Changes the current player
		switchCurrentPlayer();
	};

	/**
	 * Will validate move and change the current grid state
	 * @param rowIdx The x co-ord of the move
	 * @param colIdx The y co-ord of the move
	 */
	const updateGridState = (rowIdx: number, colIdx: number) => {
		if (gridState[rowIdx][colIdx]) {
			return null;
		}
		let updatedGridState = [...gridState];
		updatedGridState[rowIdx][colIdx] = currentPlayerState;
		setGridState(updatedGridState);
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
	 * Changes the currentPlayerState by switching whose turn it is
	 */
	const switchCurrentPlayer = () => {
		currentPlayerState === 'x'
			? setCurrentPlayerState('o')
			: setCurrentPlayerState('x');
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
			<Footer resetGame={resetGame} />
		</div>
	);
};

export default App;
