import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Course {
  id: number;
  price: number;
  title: string;
  name?: string;
  description: string;
  desc?: string;       
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private defaultDescription = 'This is a great course to learn new skills!';

  courses: Course[] = [
    {
      id: 1,
      title: 'Complete Modern JavaScript Course',
      name: 'JavaScript',
      price: 499,
      description: this.defaultDescription,
      desc: this.defaultDescription,    
      image: 'java.jpg'
    },
    {
      id: 2,
      title: 'A Complete Modern Angular Course',
      name: 'Angular',
      price: 599,
      description: this.defaultDescription,
      desc: this.defaultDescription,
      image: 'angular.jpg'
    },
    {
      id: 3,
      title: 'A Complete Node JS Bootcamp',
      name: 'Node JS',
      price: 449,
      description: this.defaultDescription,
      desc: this.defaultDescription,
      image: 'react.jpg'
    },
    {
      id: 4,
      title: 'Complete Machine Learning Course',
      name: 'Machine Learning',
      price: 699,
      description: this.defaultDescription,
      desc: this.defaultDescription,
      image: 'machine learning.jpg'
    }
  ];

  constructor() {}

  getAllCourses(): Observable<Course[]> {
    return new Observable((sub) => {
      setTimeout(() => {
         sub.next(this.courses);
        sub.complete();
      }, 5000);
    });
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(c => c.id == id);
  }
}
