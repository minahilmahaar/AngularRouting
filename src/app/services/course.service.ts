import { Injectable } from '@angular/core';

export interface Course {
  id: number;
  price: number;
  title: string;      
  name?: string;        
  description: string;
}

@Injectable({
  providedIn: 'root' 
})
export class CourseService {

  private defaultDescription = 'This is a great course to learn new skills!';

  courses: Course[] = [
    { id: 1, title: 'Complete Modern JavaScript Course', price: 499, description: this.defaultDescription },
    { id: 2, title: 'A Complete Angular Course', price: 599, description: this.defaultDescription },
    { id: 3, title: 'A Complete Node JS Bootcamp', price: 449, description: this.defaultDescription },
    { id: 4, title: 'Complete Machine Learning Course', price: 699, description: this.defaultDescription },
  ];

  constructor() {}

  getAllCourses(): Course[] {
    return this.courses;
  }
}
