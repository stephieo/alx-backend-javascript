interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    any: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacher {
    firstName: string;
    lastName: string;
}

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.slice(0,1)}. ${lastName}`
}

interface StudentClass {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string; 
}
class StudentClass implements StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working'
    }

    displayName(): string {
        return this.firstName;
    }
}
