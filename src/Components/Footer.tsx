import resetBtn from '../assets/reset.svg';
import Styles from '../Styles/Footer.module.css';

interface footerProps {
	resetGame: () => void;
}

const Footer = (props: footerProps) => {
	return (
		<div className={Styles.container}>
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
