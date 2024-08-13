interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentOne: Student = {
    firstName: 'Stanley',
    lastName: 'Tucci',
    age: 45,
    location: 'Italy',
}

const studentTwo: Student = {
    firstName: 'Bobby',
    lastName: 'Hernandez',
    age: 25,
    location:' Mexico',
}

const studentsList: Student[] = [studentOne,studentTwo];

function renderTable(students: Student[]): void {
    // Create Table
    const table = document.createElement('table');

    // Create Table Headers
    const headers = table.createTHead();
    const headerRow = headers.insertRow();
    const header1 = headerRow.insertCell();
    const header2 = headerRow.insertCell();

    header1.textContent = 'First Name';
    header2.textContent = 'Location';

    // Create Table Body
    const tbody = table.createTBody();

    students.forEach((student) => {
        // Create Table Row
        const row = tbody.insertRow();

        // Create and Insert Cells
        const firstCell = row.insertCell();
        firstCell.textContent = student.firstName;

        const secondCell = row.insertCell();
        secondCell.textContent = student.location;
    });

    // Append the table to the document body
    document.body.appendChild(table);
}
