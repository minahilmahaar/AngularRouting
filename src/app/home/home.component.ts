import { Component, inject} from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [RouterLink ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
//router : Router = inject(Router);
  value: any;
 constructor(private router: Router) {}

 goToCourses() {
    
//this.router.navigateByUrl('Courses'); 
 }                                         
OnSearchClicked(value:string){
 //console.log('Search value:', value); 
this.router.navigate(['/courses'], { queryParams: {search: value}});
}
}

 


