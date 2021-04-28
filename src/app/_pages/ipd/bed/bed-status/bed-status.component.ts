import { Component, OnInit } from '@angular/core';
import { BedmasterService } from 'src/app/_service/static/bedmaster.service';

@Component({
  selector: 'app-bed-status',
  templateUrl: './bed-status.component.html',
  styleUrls: ['./bed-status.component.css']
})
export class BedStatusComponent implements OnInit {

  constructor(private bedMasterService:BedmasterService) { }

  form: any = {};
  isSubmit = false;

  bedStatus : any = [];
  bedDetails:Array<any> = [];

  ngOnInit(): void {

    this.bedMasterService.bedStatus().subscribe(res=>{

      this.bedStatus = res.body
        console.log(res.body);
        

      this.bedStatus.bedList.forEach(element => {

        this.bedDetails.push(element)

      });

      
    })
  }
  
  onSubmit(): void {
  }
}
