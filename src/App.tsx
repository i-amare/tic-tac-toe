import ScoreBoard from './Components/Scoreboard';
import Grid from './Components/Grid';
import Colours from './Components/Colours';
import Footer from './Components/Footer';
import './Styles/App.css';
import { useState } from 'react';
import Vendor from './Scripts/Vendor';
import Player from './Scripts/Player';

interface scoreBoard {
	o: number;
	equals: number;
	x: number;
}

interface theme {
	oColour: string;
	xColour: string;
	equalsColour: string;
	borderColour: string;
	bgColour: string;
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
		equals: 0,
		x: 0,
	});

	const [currentPlayerState, setCurrentPlayerState] = useState('x');

	const [gameState, setGameState] = useState(true);

	/**
	 * Changes the theme of the app
	 * @param theme The colours of the new theme
	 */
	const changeTheme = (theme: theme) => {
		document.documentElement.style.setProperty('--o-colour', theme.oColour);
		document.documentElement.style.setProperty('--x-colour', theme.xColour);
		document.documentElement.style.setProperty(
			'--border-colour',
			theme.borderColour
		);
		document.documentElement.style.setProperty(
			'--background-colour',
			theme.bgColour
		);
		document.documentElement.style.setProperty(
			'--equals-colour',
			theme.equalsColour
		);
	};

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
		if (gameState) {
			let newGrid = [...gridState];
			const move = Player.move(newGrid, currentPlayerState);
			makeMove(move[0], move[1]);
		}
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
			updateScore('equals');
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
			<Colours changeTheme={changeTheme} />
			<Footer resetGame={resetGame} playAI={playAI} />
		</div>
	);
};

export default App;
