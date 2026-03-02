import { Routes } from '@angular/router';
import { CoursesComponent } from './layout/Courses/courses';
import { LoginComponent } from './layout/Auth/Login/login';
import { RegisterComponent } from './layout/Auth/Registration/registration';
import { CourseInfoComponent } from './layout/CourseInfo/course-info';
import { CourseFormComponent } from './layout/Courses/CourseForm/course-form';
import { authGuard } from './guards/auth.quard';

export const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'courses',
    canActivate: [authGuard],
    children: [
      { path: '', component: CoursesComponent },
      { path: 'create', component: CourseFormComponent },
      { path: 'update/:id', component: CourseFormComponent },
      { path: ':id', component: CourseInfoComponent }
    ]
  },

  { path: '**', redirectTo: 'courses' }
];
