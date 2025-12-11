import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';

import { NotFoundComponent } from './app/not-found.component/not-found.component';
import { CourseDetailComponent } from './app/courses/course-detail.component/course-detail.component';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./app/home/home.component').then(m => m.HomeComponent),
  },


  {
    path: 'home',
    loadComponent: () =>
      import('./app/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./app/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./app/contact/contact.component').then(m => m.ContactComponent),
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./app/courses/courses.component').then(m => m.CoursesComponent),
  },


  { path: 'course/:id', component: CourseDetailComponent },
  { path: '**', component: NotFoundComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch(err => console.error(err));
