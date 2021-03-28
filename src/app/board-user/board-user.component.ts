import { PropertyService } from './../_services/master_service/property.service';
import { TaxcollectionReciptService } from './../_services/entry_service/taxcollection-recipt.service';
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
    private taxcollectionReciptService:TaxcollectionReciptService,
    private tokenStorageService:TokenStorageService,
    private propertyService:PropertyService) { }

  ngOnInit(): void {

    
  }

}
