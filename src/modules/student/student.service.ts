import { Injectable } from '@nestjs/common';

interface Student {
  id: string;
  name: string;
  age: number;
  course: string;
}

@Injectable()
export class StudentService {
  private students: Student[] = [];
  private idCounter = 0;

  addStudent(name: string, age: number, course: string): Student {
    const student: Student = { id: String(this.idCounter++), name, age, course };
    this.students.push(student);
    return student;
  }

  getStudents(): Student[] {
    return this.students;
  }

  getStudentById(id: String): Student | undefined {
    return this.students.find(student => student.id === id);
  }

  updateStudent(id: String, data: Partial<Student>): Student | undefined {
    const student = this.getStudentById(id);
    if (student) {
      Object.assign(student, data);
      return student;
    }
    return undefined;
  }

  deleteStudent(id: String): boolean {
    const index = this.students.findIndex(student => student.id === id);
    if (index !== -1) {
      this.students.splice(index, 1);
      return true;
    }
    return false;
  }
}
