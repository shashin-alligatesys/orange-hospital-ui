import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opd-bill-master',
  templateUrl: './opd-bill-master.component.html',
  styleUrls: ['./opd-bill-master.component.css']
})
export class OpdBillMasterComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
