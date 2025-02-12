const students = ["Alice", "Bob", "Charlie", "David", "Eve"];

function findStudent(allStudents, studentName) {
    for(let i = 0; i< allStudents.length; i++) {
        if (studentName == allStudents[i]) {
            console.log(`${studentName} was found`)
        }
    }
}

findStudent(students, "Alice")