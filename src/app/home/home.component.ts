import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  content: string;
  roles: string;
  role = false;
  showUserBoard = false;
  showAdminBoard = false;
  VillageList = [];

  constructor(private userService: UserService,
    private tokenStorage: TokenStorageService,
    private _router: Router) { }

  ngOnInit(): void {

    const user = this.tokenStorage.getUser();

    this.roles = user.roles;

    this.showUserBoard = this.roles.includes('ROLE_USER');
    this.showAdminBoard = this.roles.includes('ROLE_ADMIN');

    if(this.showUserBoard){
      this._router.navigate(['user-board']);
    }


  }

}
