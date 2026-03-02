import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from '../../shared/components/Button/button';
import { CourseCardComponent } from './CourseCard/course-card';
import { EmptyCoursesComponent } from './EmptyCourses/empty-courses';

import { Course } from '../../models/course.model';
import { CourseStoreService } from '../../services/course-store.service';

@Component({
  selector: 'app-courses',
  templateUrl: 'courses.html',
  styleUrls: ['courses.scss'],
  standalone: true,
  imports: [ButtonComponent, CourseCardComponent, EmptyCoursesComponent]
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];
  filteredCourses: Course[] = [];

  constructor(
    private router: Router,
    private store: CourseStoreService
  ) {}

  ngOnInit() {
    this.courses = this.store.getCoursesList();
    this.filteredCourses = this.courses;
  }

  searchQuery = '';

  BUTTON_NAMES = {
    ADD_NEW_COURSE: 'Add New Course'
  };

  handleAddCourse(): void {
    this.router.navigate(['/courses/create']);
  }

  deleteCourse(courseId: string): void {
    this.store.deleteCourse(courseId);
    this.courses = this.store.getCoursesList();
    this.filteredCourses = [...this.courses];
  }

  handleSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value.toLowerCase();
    this.searchQuery = value;

    this.filteredCourses = this.courses.filter(course =>
      course.title?.toLowerCase().includes(value) ||
      course.description?.toLowerCase().includes(value)
    );
  }
}
