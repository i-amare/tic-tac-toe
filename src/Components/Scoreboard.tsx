import Styles from '../Styles/ScoreBoard.module.css';

interface scoreBoardProps {
	score: score;
}

interface score {
	o: number;
	'=': number;
	x: number;
}

const Scoreboard = (props: scoreBoardProps) => {
	return (
		<div className={Styles.scoreBoard}>
			{Object.keys(props.score).map((name: String, nameIdx: number) => (
				<div
					style={{
						color: `var(--${name}-colour)`,
					}}
					key={nameIdx}
				>
					<h1 className={Styles.header}>{name}</h1>
					<h5 className={Styles.score}>{props.score[name as keyof score]}</h5>
				</div>
			))}
		</div>
	);
};

export default Scoreboard;
