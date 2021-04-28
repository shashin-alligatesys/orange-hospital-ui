import { Component, OnInit } from '@angular/core';
import { AdminAccountyearService } from './_services/admin_service/accountyear.service';
import { TokenStorageService } from './_services/token-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  private roles: string;
  isLoggedIn = false;
  showAdminBoard = false;
  // showModeratorBoard = false;
  showUserBoard = false;
  username: string;
  userrole = false;

  constructor(private tokenStorageService: TokenStorageService,
    private accountYearService:AdminAccountyearService
    ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showUserBoard = this.roles.includes('ROLE_USER');
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');      
      this.username = user.username;
      this.userrole = this.tokenStorageService.isUserRole();
  
  }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
