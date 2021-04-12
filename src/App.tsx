import Grid from './Components/Grid';
import './Styles/App.css';
import { useState } from 'react';
import Vendor from './Scripts/vendor';

function App() {
	const [gridState, setGridState] = useState([
		['', '', ''],
		['', '', ''],
		['', '', ''],
	]);

	const [currentPlayer, setCurrentPlayer] = useState('x');

	const onTileClick = (rowIdx: number, colIdx: number) => {
		if (!gridState[rowIdx][colIdx]) {
			updateGridState(rowIdx, colIdx);
			switchCurrentPlayer();
			if (Vendor.checkWin(gridState)) {
				alert(`${currentPlayer} has won`);
			} else if (Vendor.checkDraw(gridState)) {
				alert(`It is a draw`);
			}
		}
	};

	const updateGridState = (rowIdx: number, colIdx: number) => {
		let updatedGridState = gridState;
		updatedGridState[rowIdx][colIdx] = currentPlayer;
		setGridState(updatedGridState);
	};

	const switchCurrentPlayer = () => {
		currentPlayer === 'x' ? setCurrentPlayer('o') : setCurrentPlayer('x');
	};

	return (
		<div className='App'>
			<Grid gridState={gridState} onTileClick={onTileClick} />
		</div>
	);
}

export default App;
