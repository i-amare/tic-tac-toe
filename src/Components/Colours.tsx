import Styles from '../Styles/Colours.module.css';

interface couloursProps {
	changeTheme: (theme: theme) => void;
}

interface theme {
	xColour: string;
	oColour: string;
	borderColour: string;
	bgColour: string;
	equalsColour: string;
}

const Colours = (props: couloursProps) => {
	const darkTheme: theme = {
		xColour: '#03dac6',
		oColour: '#bb86fc',
		borderColour: 'lightsteelblue',
		bgColour: '#151515',
		equalsColour: 'lightsteelblue',
	};

	const lightTheme: theme = {
		xColour: '#f38680',
		oColour: '#69d2e7',
		borderColour: 'lightsteelblue',
		bgColour: '#f5f7ee',
		equalsColour: '#000000',
	};

	return (
		<div className='Colours'>
			<div className={Styles.dotsContainer}>
				<button
					className={Styles.dots}
					id='darkTheme'
					onClick={() => props.changeTheme(darkTheme)}
					style={{
						backgroundColor: darkTheme.bgColour,
					}}
				></button>
				<button
					className={Styles.dots}
					id='lightTheme'
					onClick={() => props.changeTheme(lightTheme)}
					style={{
						backgroundColor: lightTheme.bgColour,
					}}
				></button>
			</div>
		</div>
	);
};

export default Colours;
