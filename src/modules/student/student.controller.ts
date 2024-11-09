import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  createStudent(@Body() body: { name: string; age: number; course: string }):any {
    return this.studentService.addStudent(body.name, body.age, body.course);
  }

  @Get()
  getAllStudents(): any {
    return this.studentService.getStudents();
  }

  @Get(':id')
  getStudentById(@Param('id') id: string): any {
    return this.studentService.getStudentById(id);
  }

  @Patch(':id')
  updateStudent(@Param('id') id: string, @Body() body: Partial<{ name: string; age: number; course: string }>): any {
    return this.studentService.updateStudent(id, body);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: string): any {
    return this.studentService.deleteStudent(id);
  }
}
