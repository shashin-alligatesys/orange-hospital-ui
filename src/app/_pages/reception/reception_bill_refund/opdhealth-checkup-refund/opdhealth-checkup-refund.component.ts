import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opdhealth-checkup-refund',
  templateUrl: './opdhealth-checkup-refund.component.html',
  styleUrls: ['./opdhealth-checkup-refund.component.css']
})
export class OpdhealthCheckupRefundComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
