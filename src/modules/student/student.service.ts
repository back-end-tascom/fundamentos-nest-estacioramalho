import { Injectable } from '@nestjs/common';

export interface Student {
    id: number;
    name: string;
    age: number;
    course: string;
}

@Injectable()
export class StudentService {
    private students : Student[];
    
    constructor() {
        this.students = [
            { id: 1, name: 'John Doe', age: 20, course: 'Computer Science' },
            { id: 2, name: 'Jane Doe', age: 22, course: 'Information Technology' },
            { id: 3, name: 'Alice', age: 21, course: 'Computer Science' },
        ];
    }

    addStudent(name: string, age: number, course: string) {
        const id = Math.floor(Math.random() * 999);
        const newStudent: Student = { id, name, age, course };
        this.students.push(newStudent);
        return newStudent;

    }

    getStudents() {
        return this.students;
    }

    get

}
