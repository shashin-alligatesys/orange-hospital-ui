import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tds-master',
  templateUrl: './tds-master.component.html',
  styleUrls: ['./tds-master.component.css']
})
export class TdsMasterComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
