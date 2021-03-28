import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-refund',
  templateUrl: './lab-refund.component.html',
  styleUrls: ['./lab-refund.component.css']
})
export class LabRefundComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }
}
