import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { Author } from '../models/author.model';
import { User } from '../models/user.model';
import { MOCKED_COURSES_LIST } from '../data/mock-courses';
import { MOCKED_AUTHORS_LIST } from '../data/mock-authors';

@Injectable({ providedIn: 'root' })
export class CourseStoreService {

  users: User[] = [];
  courses: Course[] = [...MOCKED_COURSES_LIST];
  authors: Author[] = [...MOCKED_AUTHORS_LIST];

  getCourseById(id: string): Course | undefined {
    return this.courses.find(c => c.id === id);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }

  updateCourse(id: string, updated: Course): void {
    this.courses = this.courses.map(course =>
      course.id === id
        ? { ...course, ...updated, duration: updated.duration ? Number(updated.duration) : course.duration }
        : course
    );
  }

  deleteCourse(id: string) {
    this.courses = this.courses.filter(c => c.id !== id);
  }

  addUser(user: User) {
    this.users.push(user)
  }
}
