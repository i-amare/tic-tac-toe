import { CSSProperties } from 'react';

interface tileProps {
	tileState: String;
	rowIdx: number;
	colIdx: number;
	onTileClick: (rowIdx: number, colIdx: number) => void;
}

const Tile = (props: tileProps) => {
	const centerItems = {
		display: 'grid',
		alignContent: 'center',
		justifyContent: 'center',
	};

	const characterStyling: CSSProperties = {
		fontSize: 'var(--character-size)',
		fontWeight: 'lighter',
		color: `var(--${props.tileState}-colour)`,
		margin: 0,
	};

	return (
		<div
			id={`r${props.rowIdx}c${props.colIdx}`}
			className='view-tiles'
			style={centerItems}
			onClick={() => props.onTileClick(props.rowIdx, props.colIdx)}
		>
			<h3 style={characterStyling}>{props.tileState}</h3>
		</div>
	);
};

export default Tile;
