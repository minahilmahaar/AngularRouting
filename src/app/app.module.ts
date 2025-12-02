import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes=[
 {path:'',component:HomeComponent},
 {path:'about',component:AboutComponent},
 {path:'contact',component:ContactComponent},
 {path:'courses',component:CoursesComponent},
 {path:'**',redirectTo:''}
];

@NgModule({
 declarations:[AppComponent,HeaderComponent,FooterComponent,HomeComponent,AboutComponent,ContactComponent,CoursesComponent],
 imports:[BrowserModule,RouterModule.forRoot(routes)],
 bootstrap:[AppComponent]
})
export class AppModule{}