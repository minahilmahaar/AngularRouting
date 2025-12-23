import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
 import { NotFoundComponent } from './app/not-found.component/not-found.component';
import { CourseDetailComponent } from './app/courses/course-detail.component/course-detail.component';
import { CourseBuyComponent } from './app/courses/course-buy.component/course-buy.component';
import { LoginComponent } from './app/header/login/login.component';
import { AuthGaurdService } from './app/services/authgaurd.service';
import { CanActivate, CanActivateChild } from './app/auth.guard';

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
      import('./app/contact/contact.component').then(m => m.ContactComponent), canDeactivate: [AuthGaurdService],
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./app/courses/courses.component').then(m => m.CoursesComponent),
  },
,
 
{path: 'courses', canActivateChild: [ CanActivateChild ], children: [
  
  {
    path: 'buy',
    loadComponent: () =>
      import('./app/courses/course-buy.component/course-buy.component').then(m => m.CourseBuyComponent),
  },
  {
    path: 'detail',
    loadComponent: () =>
      import('./app/courses/course-detail.component/course-detail.component').then(m => m.CourseDetailComponent),
  },
]},
 { path: 'course/:id', component: CourseDetailComponent },
    { path: 'course-buy/:id', component: CourseBuyComponent },


    { path: 'Login', component:LoginComponent},
  { path: '**', component: NotFoundComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch(err => console.error(err));
