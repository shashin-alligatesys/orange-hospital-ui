import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opdhealth-checkup',
  templateUrl: './opdhealth-checkup.component.html',
  styleUrls: ['./opdhealth-checkup.component.css']
})
export class OpdhealthCheckupComponent implements OnInit {

  constructor() { }
 
  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
