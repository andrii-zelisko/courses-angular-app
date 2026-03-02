import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { CourseStoreService } from '../../services/course-store.service';
import { getCourseDuration, formatCreationDate } from '../../utils/utils';
import { BUTTON_NAMES } from '../../services/button-names-store.service';
import { Course } from '../../models/course.model';
import { Author } from '../../models/author.model';
import { ButtonComponent } from '../../shared/components/Button/button';

@Component({
  selector: 'app-course-info',
  templateUrl: 'course-info.html',
  styleUrls: ['course-info.scss'],
  imports: [ButtonComponent, RouterLink]
})

export class CourseInfoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private store: CourseStoreService
  ) {}

  course?: Course;
  authors: Author[] = [];
  BUTTON_NAMES = BUTTON_NAMES;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.course = this.store.getCourseById(id);
    if (this.course?.authors?.length) {
      this.authors = this.course.authors
        .map(authorId => this.store.authors.find(a => a.id === authorId))
        .filter((a): a is Author => !!a); // filter undefined
    }
  }

  get duration(): string {
    return this.course ? getCourseDuration(Number(this.course.duration)) : 'N/A';
  }

  get created(): string {
    return this.course ? formatCreationDate(String(this.course.creationDate)) : 'N/A';
  }
}
