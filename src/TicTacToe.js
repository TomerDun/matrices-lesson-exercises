const Matrix = require('./Matrix.js');

class TicTacToe extends Matrix {    
    loadBoard() {
        const newMatrix = [];
        for (let i = 0; i < 3; i++) {
            const newRow = [];
            for (let j = 0; j < 3; j++) {
                newRow.push('.');
            }
            newMatrix.push(newRow);
        }
        this.matrix = newMatrix;
    }

    play(rowNum, colNum, player) {
        // Extension 1
        if (this.matrix[rowNum][colNum] !== '.') {
            console.log('This spot is takes');
            return;            
        }
        this.matrix[rowNum][colNum] = player === 1 ? 'x' : 'o'

        // Check for winner in the column that was just played        
        if (this.matrix[0][colNum] === this.matrix[1][colNum] && this.matrix[0][colNum] === this.matrix[2][colNum]) {
            console.log('Congratulations  Player ', player);
            console.log('This is the final board');
            this.print();            
            console.log('Resetting the board');
            this.loadBoard();                        
        }
    }
}

// Ex7
console.log('-------Ex7----------');
let board = new TicTacToe()
board.loadBoard()
board.print()


// Ex8
console.log('-------Ex8----------');
let board1 = new TicTacToe()
board1.loadBoard()

board1.play(2, 2, 1)
board1.play(0, 0, 2)
board1.print()


// Ex9
console.log('-------Ex9----------');
let board2 = new TicTacToe()
board2.loadBoard()
    
board2.play(2, 2, 1)
board2.play(2, 2, 1) // EXtension 1 check
board2.play(0, 0, 2)
board2.play(0, 2, 1)
board2.play(1, 0, 2)
board2.play(1, 2, 1) //prints Congratulations Player 1
    
board2.print()
