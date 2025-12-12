import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent {
selectedTab: string = 'personal';
selectTab(tab: string) {
  this.selectedTab = tab;
}

  courseId: any;
  courseData: any;

  courses = {
    javascript: {
      title: 'Complete Modern JavaScript Course',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXw0ibKF5hUXjyRn1YttR5fzrCtkrefYkCQ&s',
      price: 499,
      discount: 99,
      description: 'Learn JavaScript from basics to advanced with real-world projects.',
      duration: '3 Months',
      lessons: 120
    },
    angular: {
      title: 'A Complete Angular Course',
      img: 'https://ict-trainings.com/storage/app/public/course/banner_5c88b1428edb1.jpg',
      price: 599,
      discount: 129,
      description: 'Master Angular framework and build dynamic web applications.',
      duration: '3 Months',
      lessons: 140
    },
    react: {
      title: 'A Complete React Developer Course',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwaT6o4D4RZNrFYmuLMri9KtVb-QCp-K6zDA&s',
      price: 599,
      discount: 149,
      description: 'Build modern web apps using React, hooks & Redux.',
      duration: '2.5 Months',
      lessons: 110
    },
    ml: {
      title: 'Machine Learning Complete Course',
      img: 'https://media.istockphoto.com/id/966248982/photo/robot-with-education-hud.jpg?s=612x612&w=0&k=20&c=9eoZYRXNZsuU3edU87PksxN4Us-c9rB6IR7U_IGZ-U8=',
      price: 699,
      discount: 199,
      description: 'Learn machine learning models, AI, training, data processing.',
      duration: '4 Months',
      lessons: 160
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get('id');
    this.courseData = this.courses[this.courseId];
  }
}
