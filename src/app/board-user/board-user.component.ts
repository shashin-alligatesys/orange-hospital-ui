
import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  update_count:string;
  reject_count:string;

  update_count1:string;
  reject_count1:string;

  product:string;

  constructor(private userService: UserService,
    private tokenStorageService:TokenStorageService) { }

  ngOnInit(): void {

    
  }

}
