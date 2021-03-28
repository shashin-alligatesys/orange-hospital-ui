import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../_services/master_service/property.service';
import { TaxcollectionReciptService } from './../_services/entry_service/taxcollection-recipt.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {


  product:string;
  product2:string;

  constructor(private userService: UserService,
    private activatedroute:ActivatedRoute,
    private propertyService:PropertyService,
    private taxcollectionReciptService: TaxcollectionReciptService) { }
  
    update_count:string;
    reject_count:string;
    update_count1:string;
    reject_count1:string;

  ngOnInit(): void {

    this.activatedroute.queryParams.subscribe(data => {
      this.product = data['query'];
      this.product2 = data['query2'];
      
     });




    this.propertyService.findCountByVillageAndStatus(this.product,'Update').subscribe(
      data => {
        this.update_count = data.body;
      },
      err => {
        console.log(err)
      }
    );
    this.propertyService.findCountByVillageAndStatus(this.product,'Reject').subscribe(
      data => {
        this.reject_count = data.body;
      },
      err => {
        console.log(err)
      }
    );


    this.taxcollectionReciptService.findCountByVillageAndStatus(this.product,'Update').subscribe(
      data => {
        this.update_count1 = data.body;
      },
      err => {
        console.log(err)
      }
    );
    this.taxcollectionReciptService.findCountByVillageAndStatus(this.product,'Reject').subscribe(
      data => {
        this.reject_count1 = data.body;
      },
      err => {
        console.log(err)
      }
    );

  }

}
