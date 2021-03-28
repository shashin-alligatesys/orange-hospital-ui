import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referring-doctor',
  templateUrl: './referring-doctor.component.html',
  styleUrls: ['./referring-doctor.component.css']
})
export class ReferringDoctorComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
