import {Injectable, signal} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = signal<any | null>(this.getStoredUser());

  login(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.user.set(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.user.set(null);
    window.location.reload();
  }

  private getStoredUser() {
    const data = localStorage.getItem('user');
    return data ? JSON.parse(data) : null;
  }
}
