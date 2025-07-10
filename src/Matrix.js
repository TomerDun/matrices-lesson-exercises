/* Write your code below */
class Matrix {
    constructor(rows,cols) {
        this.matrix = this.generateMatrix(rows,cols)
    }
    
    generateMatrix(rows, cols) {
        const newMatrix = [];
        let counter = 1;
        for (let row = 0; row < rows; row ++) {
            const newRow = [];
            for (let col = 0; col < cols; col ++) {
                newRow.push(counter);
                counter ++;
            }
            newMatrix.push(newRow);
        }
        return newMatrix;
    }

    get(row, col) {
        return this.matrix[row][col];
    }

    alter(row, col, value) {
        this.matrix[row][col] = value;
    }

    findCoordinate(value) {
        for (const rowIndex in this.matrix) {
            for (const colIndex in this.matrix[rowIndex]) {
                if (this.matrix[rowIndex][colIndex] === value) {
                    return {x: colIndex, y: rowIndex}
                }
            }
        }
        return {};
    }

    printRow(row) {
        let output = '';
        for (const num of this.matrix[row]) {
            output += num + '  ';
        }
        console.log(output);
        return output;
        
    }

    printColumn(col) {
        let output = '';
        for (const row of this.matrix) {
            output += row[col] + '\n\n'
        }
        console.log(output);
        
    }

    print() {
        for (const rowIndex in this.matrix) {
            this.printRow(rowIndex)
        }
    }
}



//You can paste the code from the lesson below to test your solution
let m = new Matrix(3, 4)
m.print()
//prints
/*
1       2       3       4
5       6       7       8
9       10      11      12
*/
    
m.alter(0, 0, m.get(1, 1))
m.printColumn(0) //prints 6, 5, 9 (separate lines)
m.printRow(0) //prints 6, 2, 3, 4 (separate lines)


// Ex2
let m1 = new Matrix(3, 4)
console.log(m1.findCoordinate(12)) //prints {x: 3, y: 2}
console.log(m1.findCoordinate(7)) //prints {x: 2, y: 1}



/* Do not remove the exports below */
module.exports = Matrix