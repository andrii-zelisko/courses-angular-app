import { Routes } from '@angular/router';
import { CoursesComponent } from './layout/Courses/courses';
import {LoginComponent} from './layout/Auth/Login/login';
import {RegisterComponent} from './layout/Auth/Registration/registration';
import {CourseInfoComponent} from './layout/CourseInfo/course-info';
import {CourseFormComponent} from './layout/Courses/CourseForm/course-form';

export const routes: Routes = [
  {path: '', component: CoursesComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'courses/:id', component: CourseInfoComponent},
  {path: 'courses/update/:id', component: CourseFormComponent},
  {path: 'courses/create', component: CourseFormComponent}
];
