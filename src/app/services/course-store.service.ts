import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { Author } from '../models/author.model';
import { User } from '../models/user.model';
import { MOCKED_COURSES_LIST } from '../data/mock-courses';
import { MOCKED_AUTHORS_LIST } from '../data/mock-authors';
import {FormControl, ɵFormGroupValue, ɵTypedOrUntyped, ɵValue} from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class CourseStoreService {

  users: User[] = [];
  courses: Course[] = [...MOCKED_COURSES_LIST];
  authors: Author[] = [...MOCKED_AUTHORS_LIST];

  getCourseById(id: string): Course | undefined {
    return this.courses.find(c => c.id === id);
  }

  addCourse(course: {
    id: string;
    title?: ɵValue<FormControl<string | null>>;
    description?: ɵValue<FormControl<string | null>>;
    duration?: ɵValue<FormControl<string | null>>;
    authors?: ɵValue<FormControl<any[] | null>>;
    creationDate: string
  }) {
    // @ts-ignore
    this.courses.push(course);
  }

  updateCourse(id: ɵValue<FormControl<string | null>> | undefined, updated: ɵTypedOrUntyped<{
    id: FormControl<string | null>;
    title: FormControl<string | null>;
    description: FormControl<string | null>;
    duration: FormControl<string | null>;
    authors: FormControl<any[] | null>
  }, ɵFormGroupValue<{
    id: FormControl<string | null>;
    title: FormControl<string | null>;
    description: FormControl<string | null>;
    duration: FormControl<string | null>;
    authors: FormControl<any[] | null>
  }>, any>) {
    const index = this.courses.findIndex(c => c.id === id);
    if (index !== -1) {
      this.courses[index] = <Course>{...this.courses[index], ...updated};
    }
  }

  deleteCourse(id: string) {
    this.courses = this.courses.filter(c => c.id !== id);
  }

  addUser(user: User) {
    this.users.push(user)
  }
}
