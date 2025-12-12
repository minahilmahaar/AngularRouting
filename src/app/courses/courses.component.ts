import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService, Course } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { CourseDetailComponent } from './course-detail.component/course-detail.component';

@Component({
  selector: 'app-courses',
  imports: [CourseDetailComponent, RouterLink, CommonModule],
  standalone: true,
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']  
})
export class CoursesComponent implements OnInit {
  private coursesService = inject(CourseService);
  private activeRoute = inject(ActivatedRoute);

  AllCourses: Course[] = [];
  searchString: string = '';

  ngOnInit() {
    this.searchString = this.activeRoute.snapshot.queryParams['search'] || '';
    console.log('Search string:', this.searchString);

    this.AllCourses = this.coursesService.searchCourses(this.searchString);
  }
}
