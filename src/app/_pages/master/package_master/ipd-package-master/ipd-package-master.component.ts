import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ipd-package-master',
  templateUrl: './ipd-package-master.component.html',
  styleUrls: ['./ipd-package-master.component.css']
})
export class IpdPackageMasterComponent implements OnInit {

  constructor() { }

  form: any = {};
  isSubmit = false;

  ngOnInit(): void {
  }
  
  onSubmit(): void {
  }

}
