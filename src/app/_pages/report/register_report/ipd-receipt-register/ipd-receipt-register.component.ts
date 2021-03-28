import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ipd-receipt-register',
  templateUrl: './ipd-receipt-register.component.html',
  styleUrls: ['./ipd-receipt-register.component.css']
})
export class IpdReceiptRegisterComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
