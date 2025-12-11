import { Component } from '@angular/core';
import { CourseDetailComponent } from './course-detail.component/course-detail.component';
import { RouterLink } from '@angular/router';@
Component({

  selector: 'app-courses',
  imports: [CourseDetailComponent, RouterLink],
  standalone: true,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {}
