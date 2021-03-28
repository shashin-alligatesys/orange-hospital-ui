import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-refund',
  templateUrl: './payment-refund.component.html',
  styleUrls: ['./payment-refund.component.css']
})
export class PaymentRefundComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
