const Vendor = {
	checkWin(gridState: String[][]) {
		// Check for wins vertically and horizontally
		for (let i = 0; i < 3; i++) {
			if (
				// Checks for wins on the rows
				gridState[i][0] === gridState[i][1] &&
				gridState[i][1] === gridState[i][2] &&
				gridState[i][0]
			) {
				return true;
			} else if (
				// Check for win on the coloums
				gridState[0][i] === gridState[1][i] &&
				gridState[1][i] === gridState[2][i] &&
				gridState[0][i]
			) {
				return true;
			}
		}
		// Check for win diagonally
		if (
			(gridState[1][1] &&
				gridState[0][0] === gridState[1][1] &&
				gridState[1][1] === gridState[2][2]) ||
			(gridState[1][1] &&
				gridState[0][2] === gridState[1][1] &&
				gridState[1][1] === gridState[2][0])
		) {
			return true;
		}
		return false;
	},
	checkDraw(gridState: String[][]) {
		if (
			gridState[0][0] &&
			gridState[0][1] &&
			gridState[0][2] &&
			gridState[1][0] &&
			gridState[1][1] &&
			gridState[1][2] &&
			gridState[2][0] &&
			gridState[2][1] &&
			gridState[2][2]
		) {
			return true;
		}
		return false;
	},
};

export default Vendor;

	