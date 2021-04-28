import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { StringifyOptions } from 'querystring';

import { Subscriber } from 'rxjs';
import { AdmissionService } from 'src/app/_service/reception/reception_reception/admission.service';
import {BedmasterService} from '../../../../_service/static/bedmaster.service'

@Component({
  selector: 'app-bed-shifting',
  templateUrl: './bed-shifting.component.html',
  styleUrls: ['./bed-shifting.component.css']
})



// export class bedInfo{

//   companyID : number;
//   id:number;
//   ipdNo : number
//   opdNo : number
//   pname :string
//   preBedNo :number
//   preGroup : number
//   shiftBedNo : number
//   shiftDate :string;
//   shiftGroup :number
//   shiftTime : string;


// }
export class BedShiftingComponent implements OnInit {

  constructor(
    private bedmasterService: BedmasterService,
    private service:AdmissionService) { }


    

    // bedDe :bedInfo 
  form: any = {};
  bedForm :any ={};
  isSubmit = false;
  bedList : any = [];
  bedHistory:any=[];
  bedDetails:Array<any> = [];
  bedHistoryDetails:Array<any> =[];
  isEdit = false;
  patientList : any = [];
  patientDetails:Array<any> = [];
  bedAdmit =false;

  ngOnInit(): void {
    console.log("Enter");
    this.bedmasterService.getAdmittedPatiendDetails().subscribe(data => {
      
      console.log(data);
      
      this.patientList=data.body
      
      this.patientList.forEach(element => {
        
        this.patientDetails.push(element)
      });

    })
      

    this.bedmasterService.getBedList().subscribe(data => {      
      
      this.bedList = data.body

      this.bedList.forEach(element => {

        this.bedDetails.push(element)

      });

    });

    this.bedmasterService.bedMasterHistory().subscribe(res=>{
        console.log("res",res);
        
    
        this.bedHistory = res.body

        this.bedHistory.forEach(element => {
  
          this.bedHistoryDetails.push(element)
  
        });
  


    })
      

   
    

  }


  onEdit(row): void{
    console.log("row",row);
   
   
    window.scrollTo(0, 0);
    // this.bedForm = row
    this.form.shiftedbedno = row.bedno
    this.isEdit = true;
    
  }

  onPatientEdit(row):void{
 console.log("patientrow",row);
 
  
    this.form={}
    window.scrollTo(0, 0);
    this.form = row
    this.isEdit = true;
  }
  
  onSubmit(): void {
  
  console.log("form data", this.form);

  this.bedForm.companyID=this.form.companyId
  this.bedForm.id=this.form.id
  this.bedForm.ipdNo=this.form.ipdno
  this.bedForm.pname=this.form.name
  this.bedForm.preBedNo=this.form.bedno
  this.bedForm.shiftBedNo=this.form.shiftedbedno
  this.bedForm.shiftDate=this.form.shiftingDate
  this.bedForm.shiftTime=this.form.shiftingTime
  
  console.log("this.bedForm",this.bedForm);
  
this.bedmasterService.shiftAllocatedBed(this.bedForm).subscribe(data=>{
console.log(data);
console.log("inserted succesfully");


})

  }

  onNew(): void {
    window.location.assign(window.location.href)
    
  }

}
