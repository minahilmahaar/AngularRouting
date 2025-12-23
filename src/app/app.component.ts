import { Component, inject, OnInit,  } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  showloader: boolean = false;
  router = inject(Router);

  ngOnInit() {
    this.router.events.subscribe(event => {

      
      if (event instanceof NavigationStart) {
        if (event.url.includes('courses')) {
          this.showloader = true;
        }
      }
      if (event instanceof NavigationEnd) {
        if (event.url.includes('courses')) {
          setTimeout(() => {
            this.showloader = false;
          }, 3000); 
        } else {
          this.showloader = false;
        }
      }

    });
  }
}

