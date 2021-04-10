import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { OpdPackageMasterService } from '../../../../_service/master/package_master/opd-package-master.service';
import { OrganizationMasterService } from 'src/app/_service/static/organization-master.service';
import { OpdService } from 'src/app/_service/master/test_master/opd.service';
import { ConsultantMasterService } from 'src/app/_service/static/consultant-master.service';

@Component({
  selector: 'app-opd-package-master',
  templateUrl: './opd-package-master.component.html',
  styleUrls: ['./opd-package-master.component.css']
})
export class OpdPackageMasterComponent implements OnInit {

  constructor(private service: OpdPackageMasterService,
    private organizationMasterService: OrganizationMasterService,
    private opdService:OpdService,
    private consultantMasterService:ConsultantMasterService) { }

  form: any = {};
  isSubmit = false;
  isEdit = false;
  table_data: any = [];
  OrganizationList: any = [];
  ParticularsList:any = [];
  ConsultantList:any = [];

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.onTable()
    this.getOrganizationList()
    this.getConsultantList()
    this.form.organizationCode = 70
    this.getParticularsList()
  }

  getConsultantList():void{
    this.consultantMasterService.getConsultantList().subscribe(
      data => {
        this.ConsultantList = data.body
      },
      err => {
        console.log(err)
      }
    );
  }

  getParticularsList(): void{
    this.opdService.getParticularsListByOrganization(this.form.organizationCode).subscribe(
      data => {
        this.ParticularsList = data.body
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

  onTable(): void {
    this.service.get().subscribe(
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
    this.form.organizationCode = Number(row.organizationCode)
    this.service.getDetailsById(row.id).subscribe(
      data => {
        console.log(data.body)
        this.DetailsList = data.body
        this.DetailsList[1].testName =  Number(data.body[1].testCode)
        // testName = testCode ?
      },
      err => {
        console.log(err)
      }
    );
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
      this.service.delete(id).subscribe(
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
    this.form.details = this.DetailsList
    if (this.isEdit) {
      this.onUpdate();
    } else {
      this.onSubmit();
    }
  }
  onSubmit(): void {
    this.isSubmit = true;
    this.service.save(this.form).subscribe(
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
    this.service.update(this.form).subscribe(
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



  public DetailsList: any[] = [{
    sno: 1,
    id: 0,
    testName: '',
    procedureDoctor: '',
    qty: 0,
    rate: 0,
    amount: 0
  }];

  addAddress() {
    this.DetailsList.push({
      sno: this.DetailsList.length + 1,
      id: 0,
      testName: '',
      procedureDoctor: '',
      qty: 0,
      rate: 0,
      amount: 0
    });
  }

  removeAddress(i: number, id) {
    if (confirm("Are you sure you want to remove it?")) {
      if (id != 0) {
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
          if (result.isConfirmed) {
            this.service.deleteDetailById(id).subscribe(
              data => {
                if (data.status == 200) {
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
          }
        })
      }
      this.DetailsList.splice(i, 1);
    }
  }
  
  calculateTotal(i): void {
    this.DetailsList[i].amount = this.DetailsList[i].qty * this.DetailsList[i].rate
  }

}
