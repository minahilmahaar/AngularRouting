import { Component, inject, OnInit } from '@angular/core';
import { CourseDetailComponent } from './course-detail.component/course-detail.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService, Course} from '../services/course.service';

@Component({
  selector: 'app-courses',
  imports: [CourseDetailComponent, RouterLink],
  standalone: true,
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']  
})
export class CoursesComponent implements OnInit {
  // private coursesService = inject(CourseService);
  // private activeRoute = inject(ActivatedRoute);

  // AllCourses: Course[] = [];
  // searchString: string;

  // ngOnInit() {
  //   this.searchString = this.activeRoute.snapshot.queryParams['search'] || '';
  //   console.log('Search string:', this.searchString);

  //   if (!this.searchString === undefined || this.searchString === '' || this.searchString === null )                                                      {
  //     this.AllCourses = this.coursesService.getAllCourses();
  //   } else {
     
  //     this.AllCourses = this.coursesService.getAllCourses().filter(course =>
  //       course.name.toLowerCase().includes(this.searchString.toLowerCase())
  //     );
  //   }
  // }
  selectCourse: Course;
  courseId: number;
  courseService: CourseService=inject(CourseService);
  activeRout: ActivatedRoute=inject(ActivatedRoute);
  ngOnInit(){
   // this.courseId = this.activeRout.snapshot.params['id'];
   this.courseId = +this.activeRout.snapshot.paramMap.get('id');
  console.log(this.courseId);
    }
  }
