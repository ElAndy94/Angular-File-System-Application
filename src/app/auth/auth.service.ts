import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  token: string;
  getUserId: string;

  constructor(private router: Router) {
  }

  signupUser(email: string, password: string) {
          this.router.navigate(['/signin']);
  }

  signinUser(email: string, password: string) {
          this.router.navigate(['/home']);
        }

  logout() {
    this.token = null;
  }

  getToken() {
    // return this.token; testing
    return this.token = null;
  }

  isAuthenticated() {
    return this.token != null;
    // return this.token = null;

  }

}
