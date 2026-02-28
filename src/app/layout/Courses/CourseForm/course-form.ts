import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ɵValue} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseStoreService } from '../../../services/course-store.service';
import { generateUUID, getCurrentDateFormatted } from '../../../utils/utils';
import { Course } from '../../../models/course.model';
import { ButtonComponent } from '../../../shared/components/Button/button';
import { InputComponent } from '../../../shared/components/Input/input';

@Component({
  selector: 'app-course-form',
  templateUrl: 'course-form.html',
  styleUrls: ['course-form.scss'],
  imports: [ButtonComponent, InputComponent, ReactiveFormsModule]
})
export class CourseFormComponent implements OnInit {
  constructor(
    public store: CourseStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  courseForm = new FormGroup({
    id: new FormControl('', null),
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    duration: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    authors: new FormControl([]) // array of author IDs
  });

  isCreating = true;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== 'create') {
      this.isCreating = false;
      const course = this.store.getCourseById(id);
      if (course) this.courseForm.patchValue(course);
    }
  }

  addAuthor(authorId: string): void {
    const authors = this.courseForm.value.authors;
    // @ts-ignore
    if (!authors?.includes(authorId)) {
      // @ts-ignore
      this.courseForm.patchValue({ authors: [...authors, authorId] });
    }
  }

  getCourseDuration(minutes: number): string {
    if (!minutes) return 'N/A';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  }

  submit(): void {
    if (this.courseForm.invalid) return;

    const data: Course = this.courseForm.value;

    if (this.isCreating) {
      this.store.addCourse({
        ...data,
        id: generateUUID(),
        creationDate: getCurrentDateFormatted()
      });
    } else {
      this.store.updateCourse(data.id, data);
    }

    this.router.navigate(['/courses']);
  }

  cancel(): void {
    this.router.navigate(['/courses']);
  }

  authorName(id: string): string | undefined {
    return this.store.authors.find(a => a.id === id)?.name;
  }
}
