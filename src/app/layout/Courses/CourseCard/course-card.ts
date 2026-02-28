import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/Button/button';
import { CourseStoreService } from '../../../services/course-store.service';
import { getCourseDuration, formatCreationDate } from '../../../utils/utils';
import { BUTTON_NAMES } from '../../../services/button-names-store.service';
import { Course } from '../../../models/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: 'course-card.html',
  styleUrls: ['course-card.scss'],
  standalone: true,
  imports: [RouterLink, ButtonComponent]
})
export class CourseCardComponent {

  @Input() course!: Course;

  BUTTON_NAMES = BUTTON_NAMES;

  deleteIcon = 'assets/images/delete-icon.png';
  editIcon = 'assets/images/edit-icon.png';

  constructor(public store: CourseStoreService) {}

  get authors(): string {
    if (!this.course?.authors?.length) return '...';
    return this.course.authors
      .map(authorId => this.store.authors.find(a => a.id === authorId)?.name)
      .filter(name => !!name)
      .join(', ');
  }

  get duration(): string {
    return getCourseDuration(this.course.duration);
  }

  get creationDate(): string {
    return formatCreationDate(this.course.creationDate);
  }

  removeCourse(): void {
    this.store.deleteCourse(this.course.id);
  }
}
