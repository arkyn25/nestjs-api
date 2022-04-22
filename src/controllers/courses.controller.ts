import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateCourseDto } from 'src/courses/dto/create-course.dto';
import { UpdateCourseDto } from 'src/courses/dto/update-course.dto';
import { CoursesServices } from 'src/services/courses.services';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesServices: CoursesServices) {}
  @Post()
  public create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesServices.create(createCourseDto);
  }

  @Get()
  public getAll() {
    return this.coursesServices.findAll();
  }

  @Get(':id')
  public getOne(@Param('id') id: string) {
    return this.coursesServices.findOne(id);
  }

  @Patch(':id')
  public update(
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.coursesServices.update(id, updateCourseDto);
  }

  @Delete(':id')
  public delete(@Param('id') id: string) {
    return this.coursesServices.remove(id);
  }
}
