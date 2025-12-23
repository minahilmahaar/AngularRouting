import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService, Course } from '../../services/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-course-buy',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './course-buy.component.html',
  styleUrls: ['./course-buy.component.css']
})
export class CourseBuyComponent implements OnInit {

  course: Course | undefined;
  tax: number = 0;
  total: number = 0;

  months = [ '01','02','03','04','05','06','07','08','09','10','11','12' ];
  years: number[] = [];

  payment = {
    fullName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: ''
  };

  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    for(let i = 0; i < 10; i++) {
      this.years.push(currentYear + i);
    }

    const courseId = +this.route.snapshot.params['id'];
    this.course = this.courseService.getCourseById(courseId);

    if(this.course) {
      this.tax = this.course.price * 0.105; 
      this.total = this.course.price + this.tax;
    }
  }

  submitPayment() {
    alert(`Payment submitted for ${this.course?.title}!\nTotal: ${this.total.toFixed(2)} USD`);
  }
}
