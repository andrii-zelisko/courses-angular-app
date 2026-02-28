import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BUTTON_NAMES } from '../../../services/button-names-store.service';
import { ButtonComponent } from '../../../shared/components/Button/button';

@Component({
  selector: 'app-empty-courses',
  templateUrl: 'empty-courses.html',
  styleUrls: ['empty-courses.scss'],
  imports: [ButtonComponent]
})
export class EmptyCoursesComponent {

  constructor(private router: Router) {}

  BUTTON_NAMES = BUTTON_NAMES;

  handleAddCourse() {
    this.router.navigate(['/courses/create']);
  }

}
