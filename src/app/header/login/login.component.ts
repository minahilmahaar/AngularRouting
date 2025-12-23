import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  @ViewChild('username') username!: ElementRef;
  @ViewChild('password') password!: ElementRef;

  router: Router = inject(Router);
  authService: AuthService = inject(AuthService);

  showPassword = false;
  rememberMe = false;
  showModal = true;

  users = [
    { username: 'john doe', password: 'JD 123' },
    { username: 'Jane Smith', password: 'JS 456' },
    { username: 'Emily Brown', password: 'EM l789' },
    { username: 'Mike Johnson', password: 'MJ 1212' },
    { username: 'Z', password: 'Z' },
  ];

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  login() {
    const enteredUsername = this.username.nativeElement.value.trim();
    const enteredPassword = this.password.nativeElement.value.trim();

    if (!enteredUsername || !enteredPassword) {
      alert('Please enter username and password.');
      return;
    }

    const matchedUser = this.users.find(
      user => user.username === enteredUsername && user.password === enteredPassword
    );

    if (matchedUser) {

      if (this.rememberMe) {
        localStorage.setItem('rememberUser', enteredUsername);
      }

      this.authService.showLoader();

      setTimeout(() => {

        this.authService.hideLoader();

        alert(`Welcome ${matchedUser.username}! You are logged in.`);

        this.closeModal();
        this.router.navigate(['/buy']);  

      }, 3000); 
    } else {
      alert('Invalid credentials.');
    }
  }
}
