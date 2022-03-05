import Vendor from './Vendor';

const Player = {
	/**
	 * Looks for the best possible move that can be made
	 * @param gridState The current state of the board
	 * @returns The co-ords of the move chosen by minimax algorithm
	 */
	move(gridState: String[][], currentPlayer: String) {
		let aiGrid = [...gridState],
			bestMove = [1, 1],
			bestScore = currentPlayer === 'x' ? -Infinity : Infinity,
			isMaxing = currentPlayer === 'x';
		this.possibleMoves(aiGrid).forEach((move) => {
			gridState[move[0]][move[1]] = currentPlayer;
			let score = this.minimax(gridState, !isMaxing, 1);
			gridState[move[0]][move[1]] = '';
			if (isMaxing) {
				if (score > bestScore) {
					bestScore = score;
					bestMove = move;
				}
			} else {
				if (score < bestScore) {
					bestScore = score;
					bestMove = move;
				}
			}
		});
		return bestMove;
	},
	/**
	 * Looks for and returns valid moves on the board
	 * @param gridState The current state of the board
	 * @returns An array containt all the valid moves that can be made
	 */
	possibleMoves(gridState: String[][]) {
		let possibleMoves = [];
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (gridState[i][j]) {
					continue;
				}
				possibleMoves.push([i, j]);
			}
		}

		return possibleMoves;
	},
	/**
	 * An implementation of the minimax algorithm that will look through and evaluate all possible moves and return what it thinks is the best move
	 * @param gridState The current state of the board
	 * @param isMaxing Whether the player is trying to minimize or maximize the score
	 * @param depth The depth the algorith is at / How many moves ahead it is
	 */
	minimax(gridState: String[][], isMaxing: boolean, depth: number) {
		// Return the valuation of the gridState
		if (Vendor.checkWin(gridState)) {
			return isMaxing ? -50 + depth : 50 - depth;
		} else if (Vendor.checkDraw(gridState)) {
			return isMaxing ? depth : -depth;
		}

		if (isMaxing) {
			let bestScore = -Infinity;
			this.possibleMoves(gridState).forEach((move) => {
				gridState[move[0]][move[1]] = 'x';
				let score = this.minimax(gridState, false, depth + 1);
				gridState[move[0]][move[1]] = '';
				bestScore = Math.max(bestScore, score);
			});
			return bestScore;
		} else {
			let bestScore = Infinity;
			this.possibleMoves(gridState).forEach((move) => {
				gridState[move[0]][move[1]] = 'o';
				let score = this.minimax(gridState, true, depth + 1);
				gridState[move[0]][move[1]] = '';
				bestScore = Math.min(bestScore, score);
			});
			return bestScore;
		}
	},
};

export default Player;
