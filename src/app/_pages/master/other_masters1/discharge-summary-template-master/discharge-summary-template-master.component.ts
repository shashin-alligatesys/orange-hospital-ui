import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discharge-summary-template-master',
  templateUrl: './discharge-summary-template-master.component.html',
  styleUrls: ['./discharge-summary-template-master.component.css']
})
export class DischargeSummaryTemplateMasterComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }
}
