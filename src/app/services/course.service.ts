import { Injectable } from '@angular/core';

export interface Course {
  id: number;
  price: number;
  title: string;      
  name?: string;        
  description: string;
  desc?: string;
}

@Injectable({
  providedIn: 'root' 
})
export class CourseService {

  private defaultDescription = 'This is a great course to learn new skills!';

 courses: Course[] = [
  { id: 1, title: 'Complete Modern JavaScript Course', name: 'JavaScript', price: 499, description: this.defaultDescription },
  { id: 2, title: 'A Complete Angular Course', name: 'Angular', price: 599, description: this.defaultDescription },
  { id: 3, title: 'A Complete Node JS Bootcamp', name: 'Node JS', price: 449, description: this.defaultDescription },
  { id: 4, title: 'Complete Machine Learning Course', name: 'Machine Learning', price: 699, description: this.defaultDescription },
];

  constructor() {}

  getAllCourses(): Course[] {
    return this.courses;
  }
  searchCourses(searchTerm: string): Course[] {
    if (!searchTerm) return this.getAllCourses();
    return this.courses.filter(course =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
