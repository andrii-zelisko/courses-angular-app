import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/Button/button';
import { CourseCardComponent } from './CourseCard/course-card';
import { EmptyCoursesComponent } from './EmptyCourses/empty-courses';

import { Course } from '../../models/course.model';
import { MOCKED_COURSES_LIST } from '../../data/mock-courses';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: 'courses.html',
  styleUrls: ['courses.scss'],
  standalone: true,
  imports: [ButtonComponent, CourseCardComponent, EmptyCoursesComponent, RouterLink]
})
export class CoursesComponent {

  searchQuery = '';

  BUTTON_NAMES = {
    ADD_NEW_COURSE: 'Add New Course'
  };

  courses: Course[] = [...MOCKED_COURSES_LIST];
  filteredCourses: Course[] = [...this.courses];

  handleSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value.toLowerCase();
    this.searchQuery = value;

    this.filteredCourses = this.courses.filter(course =>
      course.title?.toLowerCase().includes(value) ||
      course.description?.toLowerCase().includes(value)
    );
  }
}
