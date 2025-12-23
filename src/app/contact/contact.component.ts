import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { NavigationEnd, NavigationStart, Router, RouterEvent, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
firstName: string = '';
lastName: string = '';
country: string = 'Canada';
message: string ='';

issubmitted: boolean = false;
OnSubmit(){
  this.issubmitted = true;
}
canExit(){
  console.log('canExit called!')
  if((this.firstName || this.lastName || this.message) && !this.issubmitted){
     return confirm('You have unsaved changes.Do you want to navigate away?')
}
else{
  return false;
}
}
//   showloader: boolean = false;
//   router: Router = inject(Router);

//   toggleLoader() {
//     this.showloader = !this.showloader;
//   }
//  ngOnInit(){
// this.router.events.subscribe((RouterEvent) => {
//   if(RouterEvent instanceof NavigationStart){
//     this.showloader = true;
//   }
//   if(RouterEvent instanceof NavigationEnd){
//     this.showloader = false;
//   }
// })
//  }
}
