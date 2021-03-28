import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-bill-master',
  templateUrl: './lab-bill-master.component.html',
  styleUrls: ['./lab-bill-master.component.css']
})
export class LabBillMasterComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
