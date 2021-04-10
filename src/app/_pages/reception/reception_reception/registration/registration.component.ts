import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import Swal from 'sweetalert2';
import { RegistrationService } from '../../../../_service/reception/reception_reception/registration.service';
import { OrganizationMasterService } from '../../../../_service/static/organization-master.service';
import { DoctorReferenceService } from '../../../../_service/static/doctor-reference.service';
import { ConsultantMasterService } from '../../../../_service/static/consultant-master.service';
import { MasterCategoryService } from '../../../../_service/static/master-category.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private registrationService: RegistrationService,
    private organizationMasterService: OrganizationMasterService,
    private doctorReferenceService: DoctorReferenceService,
    private consultantMasterService: ConsultantMasterService,
    private masterCategoryService: MasterCategoryService) { }

  form: any = {};
  isSubmit = false;
  isEdit = false;
  table_data: any = [];
  ageString = "";
  OrganizationList: any = [];
  DoctorReferenceList: any = [];
  ConsultantList: any = [];


  IdnoCaptionList: any = [];
  AreaList: any = [];
  CityList: any = [];
  StateList: any = [];
  CountryList: any = [];
  PatientTypeList: any = [];
  ReligionList: any = [];
  OccupationList: any = [];

  ngOnInit(): void {
    this.form.uhid = 1
    this.onTable()
    this.getNextTOKEN()
    this.form.date = new Date().toISOString().substring(0, 10);
    this.getOrganizationList()
    this.getDoctorReferenceList()
    this.getConsultantList()
    this.getCategories()
  }

  getCategories(): void {

    this.masterCategoryService.getCategoryList("IDNO").subscribe(
      data => {
        this.IdnoCaptionList = data.body
      },
      err => {
        console.log(err)
      }
    );

    this.masterCategoryService.getCategoryList("area").subscribe(
      data => {
        this.AreaList = data.body
      },
      err => {
        console.log(err)
      }
    );

    this.masterCategoryService.getCategoryList("City").subscribe(
      data => {
        this.CityList = data.body
      },
      err => {
        console.log(err)
      }
    );

    this.masterCategoryService.getCategoryList("State").subscribe(
      data => {
        this.StateList = data.body
      },
      err => {
        console.log(err)
      }
    );

    this.masterCategoryService.getCategoryList("Country").subscribe(
      data => {
        this.CountryList = data.body
      },
      err => {
        console.log(err)
      }
    );

    this.masterCategoryService.getCategoryList("PATIENT TYPE").subscribe(
      data => {
        this.PatientTypeList = data.body
      },
      err => {
        console.log(err)
      }
    );

    this.masterCategoryService.getCategoryList("Religion").subscribe(
      data => {
        this.ReligionList = data.body
      },
      err => {
        console.log(err)
      }
    );

    this.masterCategoryService.getCategoryList("Occupation").subscribe(
      data => {
        this.OccupationList = data.body
      },
      err => {
        console.log(err)
      }
    );


  }


  getConsultantList(): void {
    this.consultantMasterService.getConsultantList().subscribe(
      data => {
        this.ConsultantList = data.body
      },
      err => {
        console.log(err)
      }
    );
  }

  getDoctorReferenceList(): void {
    this.doctorReferenceService.getDoctorReferenceList().subscribe(
      data => {
        this.DoctorReferenceList = data.body
      },
      err => {
        console.log(err)
      }
    );
  }

  getOrganizationList(): void {
    this.organizationMasterService.getOrganizationList().subscribe(
      data => {
        this.OrganizationList = data.body
      },
      err => {
        console.log(err)
      }
    );
  }

  getMLCNO(): void {
    this.registrationService.getNextMLC().subscribe(
      data => {
        this.form.mlcno = data.body
      },
      err => {
        console.log(err)
      }
    );
  }

  getNextTOKEN(): void {
    this.registrationService.getNextTOKEN().subscribe(
      data => {
        this.form.tokenno = data.body
      },
      err => {
        console.log(err)
      }
    );
  }

  onTable(): void {
    this.registrationService.get().subscribe(
      data => {
        this.table_data = data.body
      },
      err => {
        console.log(err)
      }
    );
  }
  onEdit(row): void {
    this.form = {};
    window.scrollTo(0, 0);
    this.form = row
    this.isEdit = true;
  }
  onDelete(id): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want this!",
      icon: 'warning',
      width: 300,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete it!'
    }).then((result) => {
      this.registrationService.delete(id).subscribe(
        data => {
          if (result.isConfirmed) {
            Swal.fire({
              title: 'Deleted!',
              text: 'Data Deleted Success',
              icon: 'success',
              confirmButtonText: 'OK',
              width: 300,
              timer: 1500
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.reload();
              }
            });
          }
        },
        err => {
          console.log(err)
        }
      );
    })
  }

  onNew(): void {
    window.location.assign(window.location.href)

  }
  onSave(): void {
    if (this.isEdit) {
      this.onUpdate();
    } else {
      this.onSubmit();
    }
  }
  onSubmit(): void {
    this.isSubmit = true;
    this.registrationService.save(this.form).subscribe(
      data => {
        this.isSubmit = false;
        if (data.status == 200) {
          Swal.fire({
            title: 'Success!',
            text: data.message,
            icon: 'success',
            confirmButtonText: 'OK',
            width: 300
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        } else {
          var error = "";
          error += data.message + '\n'
          if (data.fieldErrorMessageList != null) {
            for (var ob of data.fieldErrorMessageList) {
              error += ob.fieldName + " : " + ob.errorMessage + '\n'
            }
          }
          Swal.fire({
            title: 'Error!',
            text: data.message,
            html: '<pre>' + error + '</pre>',
            icon: 'error',
            confirmButtonText: 'OK',
            width: 350
          })
        }
      },
      err => {
        this.isSubmit = false;
        console.log(err);
      }
    )
  }

  onUpdate(): void {
    this.isSubmit = true;
    this.registrationService.update(this.form).subscribe(
      data => {
        this.isSubmit = false;
        if (data.status == 200) {
          Swal.fire({
            title: 'Success!',
            text: data.message,
            icon: 'success',
            confirmButtonText: 'OK',
            width: 300
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        } else {
          var error = "";
          error += data.message + '\n'
          if (data.fieldErrorMessageList != null) {
            for (var ob of data.fieldErrorMessageList) {
              error += ob.fieldName + " : " + ob.errorMessage + '\n'
            }
          }
          Swal.fire({
            title: 'Error!',
            text: data.message,
            html: '<pre>' + error + '</pre>',
            icon: 'error',
            confirmButtonText: 'OK',
            width: 350
          })
        }
      },
      err => {
        this.isSubmit = false;
        console.log(err);
      }
    )
  }

  ageCalculator() {
    //collect input from HTML form and convert into date format
    // var userinput = document.getElementById("DOB").value;
    var dob = new Date(this.form.dob)

    //extract the year, month, and date from user date input
    var dobYear = dob.getFullYear();
    var dobMonth = dob.getMonth();
    var dobDate = dob.getDate();

    //get the current date from the system
    var now = new Date();
    //extract the year, month, and date from current date
    var currentYear = now.getFullYear();
    var currentMonth = now.getMonth();
    var currentDate = now.getDate();

    //declare a variable to collect the age in year, month, and days
    var age = {};
    // var ageString = "";
    var yearAge;
    //get years
    yearAge = currentYear - dobYear;

    //get months
    if (currentMonth >= dobMonth)
      //get months when current month is greater
      var monthAge = currentMonth - dobMonth;
    else {
      yearAge--;
      var monthAge = 12 + currentMonth - dobMonth;
    }

    //get days
    if (currentDate >= dobDate)
      //get days when the current date is greater
      var dateAge = currentDate - dobDate;
    else {
      monthAge--;
      var dateAge = 31 + currentDate - dobDate;

      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }
    //group the age in a single variable
    age = {
      years: yearAge,
      months: monthAge,
      days: dateAge
    };

    if ((yearAge > 0) || (monthAge > 0) || (dateAge > 0))
      this.ageString = yearAge + "Year(s) " + monthAge + "Month(s) " + dateAge + "Day(s)";
    this.form.age = this.ageString;
  }

}
