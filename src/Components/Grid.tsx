import Tile from './Tile';
import Styles from '../Styles/Grid.module.css';

interface gridProps {
	gridState: String[][];
	onTileClick: (rowIdx: number, colIdx: number) => void;
}

/**
 * @returns A JSX Element that renders the board
 */
const Grid = (props: gridProps) => {
	return (
		<div className={Styles.grid}>
			{props.gridState.map((row: Array<String>, rowIdx: number) => (
				<div id={`${rowIdx}`} className={Styles.row} key={rowIdx}>
					{row.map((tileState: String, colIdx: number) => (
						<Tile
							key={colIdx}
							tileState={tileState}
							rowIdx={rowIdx}
							colIdx={colIdx}
							onTileClick={props.onTileClick}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default Grid;
