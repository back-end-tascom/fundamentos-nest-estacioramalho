import { Controller, Body, Get, Post, Patch, Delete } from '@nestjs/common';
import { StudentService, Student } from './student.service';

@Controller('student')
export class StudentController {
    constructor(public studentService: StudentService) {}

    @Post()
    createStudent(@Body('name') name: string, @Body('age') age: number, @Body('course') course: string): Student {
        return this.studentService.addStudent(name, age, course);
    }

    @Get()
    listStudents(): Student[] {
        return this.studentService.getStudents();
    } 

}
