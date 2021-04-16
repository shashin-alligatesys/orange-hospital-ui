import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {


  product:string;
  product2:string;

  constructor(private userService: UserService,
    private activatedroute:ActivatedRoute) { }
  
    update_count:string;
    reject_count:string;
    update_count1:string;
    reject_count1:string;

  ngOnInit(): void {

    this.activatedroute.queryParams.subscribe(data => {
      this.product = data['query'];
      this.product2 = data['query2'];
      
     });


  }

}
