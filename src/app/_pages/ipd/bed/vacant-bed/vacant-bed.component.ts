import { Component, OnInit } from '@angular/core';
import { BedmasterService } from 'src/app/_service/static/bedmaster.service';

@Component({
  selector: 'app-vacant-bed',
  templateUrl: './vacant-bed.component.html',
  styleUrls: ['./vacant-bed.component.css']
})
export class VacantBedComponent implements OnInit {

  constructor(private bedmasterService: BedmasterService) { }

  form: any = {};
  isSubmit = false;
  bedStatus : any = [];
  bedDetails:Array<any> = [];

  ngOnInit(): void {

    this.bedmasterService.getBedList().subscribe(res=>{

      console.log("res",res);
      this.bedStatus=res.body
      
      this.bedStatus.forEach(element => {
        
        this.bedDetails.push(element)
      });
      

    })

    

  }


  
  onSubmit(): void {

    this.bedmasterService.vacantBedStatus().subscribe(res=>{

      const fileURL = URL.createObjectURL(res);
      window.open(fileURL, '_blank');
   
      
    })
  }
}
