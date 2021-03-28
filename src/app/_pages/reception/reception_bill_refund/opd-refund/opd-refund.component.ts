import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opd-refund',
  templateUrl: './opd-refund.component.html',
  styleUrls: ['./opd-refund.component.css']
})
export class OpdRefundComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
