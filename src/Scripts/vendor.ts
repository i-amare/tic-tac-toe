const Vendor = {
	/**
	 * @param gridState The current state of the board
	 * @returns true if a player has won, returns false otherwise
	 */
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
	/**
	 * Checks if there is a draw
	 * @param gridState The current state of the board
	 * @returns true if there is a draw, returns false otherwise
	 */
	checkDraw(gridState: String[][]) {
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (!gridState[i][j]) {
					return false;
				}
			}
		}
		return true;
	},
};

export default Vendor;
