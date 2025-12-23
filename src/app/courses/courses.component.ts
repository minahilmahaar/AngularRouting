import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService, Course } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { CourseDetailComponent } from './course-detail.component/course-detail.component';
import { CourseBuyComponent } from './course-buy.component/course-buy.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CourseDetailComponent,
    RouterLink,
    CommonModule,
    CourseBuyComponent,
    RouterOutlet
  ],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  AllCourses: Course[] = [];
  searchString: string = '';

  constructor(
    private coursesService: CourseService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {

    this.coursesService.getAllCourses().subscribe((courses) => {

      this.AllCourses = courses;

      this.activeRoute.queryParams.subscribe((params) => {
        this.searchString = params['search'];

        if (this.searchString && this.searchString.toLowerCase() !== '') {
          this.AllCourses = courses.filter(x =>
            x.title.toLowerCase().includes(this.searchString.toLowerCase())
          );
        }
      });

    });
  }
}

