const Matrix = require('./Matrix.js')

/* Write your code below */
class EmployeeMatrix extends Matrix {
    loadData(data) {
        const newMatrix = data.map(employee => Object.values(employee))
        this.matrix = newMatrix;
    }

    getEmployees(department) {
        return this.matrix.filter(row => row[2] === department).map(row => row[1]);
    }

    getTotalSalary(department) {
        return this.matrix.filter(row => row[2] === department).reduce((sum, row) => sum + row[3], 0);
    }

    findRichest() {
        return this.matrix.reduce(
            (richest, row) => row[3] > richest[3] ? row : richest
        , [0,0,0,0])[1];
    }
}



//You can paste the code from the lesson below to test your solution

// Ex3
let data = [
    { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
    { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
    { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
    { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
    { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
    { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]

let m = new EmployeeMatrix()

console.log('---------Ex3------------');
m.loadData(data)
m.print()

// Ex4
console.log('---------Ex4------------');

console.log(m.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
console.log(m.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]

// Ex5
console.log('---------Ex5------------');
console.log(m.getTotalSalary("Finance")) //prints 4300
console.log(m.getTotalSalary("Design")) //prints 5300

// Ex6
console.log('---------Ex6------------');
console.log(m.findRichest()) //prints Anisha


/* Do not remove the exports below */
module.exports = EmployeeMatrix