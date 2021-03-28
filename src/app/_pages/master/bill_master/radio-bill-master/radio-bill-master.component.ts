import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-bill-master',
  templateUrl: './radio-bill-master.component.html',
  styleUrls: ['./radio-bill-master.component.css']
})
export class RadioBillMasterComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
