import resetBtn from '../assets/reset.svg';
import aiBtn from '../assets/robot.svg';
import Styles from '../Styles/Footer.module.css';

interface footerProps {
	resetGame: () => void;
	playAI: () => void
}

/**
 * @returns A JSX Element that houses game controls
 */
const Footer = (props: footerProps) => {
	return (
		<div className={Styles.container}>
			<img
				className={Styles.btn}
				onClick={props.playAI}
				src={aiBtn}
				alt='Play AI'
			/>
			<img
				className={Styles.btn}
				onClick={props.resetGame}
				src={resetBtn}
				alt='resetBtn'
			/>
		</div>
	);
};

export default Footer;
