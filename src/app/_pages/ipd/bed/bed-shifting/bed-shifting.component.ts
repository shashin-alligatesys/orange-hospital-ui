import { Component, OnInit } from '@angular/core';

import { Subscriber } from 'rxjs';
import {BedmasterService} from '../../../../_service/static/bedmaster.service'

@Component({
  selector: 'app-bed-shifting',
  templateUrl: './bed-shifting.component.html',
  styleUrls: ['./bed-shifting.component.css']
})
export class BedShiftingComponent implements OnInit {

  constructor(private bedmasterService: BedmasterService) { }

  form: any = {};
  isSubmit = false;
  bedList : any = [];

  ngOnInit(): void {
    console.log("Enter");
    this.bedmasterService.getAdmittedPatiendDetails().subscribe(data => {
      
      console.log("data",data);
      

    })
      

    this.bedmasterService.getBedList().subscribe(data => {
      console.log("data",data);
      this.bedList = data
      console.log("bedList",this.bedList);
      // data.forEach(element => {
        
      // });

      });
      


   
    

  }

  
  onSubmit(): void {
  }

}
