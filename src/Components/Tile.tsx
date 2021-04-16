import Styles from '../Styles/Tile.module.css';

interface tileProps {
	tileState: String;
	rowIdx: number;
	colIdx: number;
	onTileClick: (rowIdx: number, colIdx: number) => void;
}
/**
 * @returns A JSX element that shows a piece of the board
 */
const Tile = (props: tileProps) => {
	return (
		<div
			id={`r${props.rowIdx}c${props.colIdx}`}
			className={Styles.tile}
			onClick={() => props.onTileClick(props.rowIdx, props.colIdx)}
		>
			<h3
				className={Styles.text}
				style={{
					color: `var(--${props.tileState}-colour)`,
				}}
			>
				{props.tileState}
			</h3>
		</div>
	);
};

export default Tile;
