import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-refund',
  templateUrl: './radio-refund.component.html',
  styleUrls: ['./radio-refund.component.css']
})
export class RadioRefundComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
