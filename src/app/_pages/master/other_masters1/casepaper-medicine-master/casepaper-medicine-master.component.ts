import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casepaper-medicine-master',
  templateUrl: './casepaper-medicine-master.component.html',
  styleUrls: ['./casepaper-medicine-master.component.css']
})
export class CasepaperMedicineMasterComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
