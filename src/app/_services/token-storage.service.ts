import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  roleAs: string;
  accountYearId: string;
  id: string;
  
  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }

  getRole() {
    this.roleAs = this.getUser().roles;
    return this.roleAs;
  }

  isUserRole() {
    this.roleAs = this.getUser().roles;
    if(this.roleAs=='ROLE_USER'){
      return true;
    }
    return false;
  }

  getaccountYearId() {
    this.accountYearId = this.getUser().accountYearId;
    return this.accountYearId.toString();
  }

  getUserId() {
    this.id = this.getUser().id;
    return this.id.toString();
  }

  

}
