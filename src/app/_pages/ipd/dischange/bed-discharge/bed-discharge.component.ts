import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bed-discharge',
  templateUrl: './bed-discharge.component.html',
  styleUrls: ['./bed-discharge.component.css']
})
export class BedDischargeComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
