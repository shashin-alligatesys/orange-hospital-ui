import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admission-discharge',
  templateUrl: './admission-discharge.component.html',
  styleUrls: ['./admission-discharge.component.css']
})
export class AdmissionDischargeComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
