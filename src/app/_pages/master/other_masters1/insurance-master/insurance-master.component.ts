import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance-master',
  templateUrl: './insurance-master.component.html',
  styleUrls: ['./insurance-master.component.css']
})
export class InsuranceMasterComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
