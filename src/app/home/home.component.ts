import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [ ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

 goToCourses() {
    //this.router.navigate(['/Courses']);

this.router.navigateByUrl('Courses'); 
 }


}
