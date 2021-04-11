import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { IpdPackageMasterService } from '../../../../_service/master/package_master/ipd-package-master.service';
import { OrganizationMasterService } from 'src/app/_service/static/organization-master.service';
import { IpdService } from 'src/app/_service/master/test_master/ipd.service';
import { ConsultantMasterService } from 'src/app/_service/static/consultant-master.service';

@Component({
  selector: 'app-ipd-package-master',
  templateUrl: './ipd-package-master.component.html',
  styleUrls: ['./ipd-package-master.component.css']
})
export class IpdPackageMasterComponent implements OnInit {

  constructor(private service: IpdPackageMasterService,
    private organizationMasterService: OrganizationMasterService,
    private ipdService:IpdService,
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

  fillParticularsData(i): void{
    const SortRow=this.ParticularsList.find((e => e.id == Number(this.DetailsList[i].testName)))
    console.log(SortRow)
    this.DetailsList[i].qty = 1
    this.DetailsList[i].rate = SortRow.rate
    this.DetailsList[i].amount = SortRow.rate
  }

  getConsultantList():void{
    this.consultantMasterService.getConsultantList().subscribe(
      data => {
        this.ConsultantList = data.body
      },
      err => {
        console.error(err)
      }
    );
  }

  getParticularsList(): void{
    this.ipdService.getParticularsListByOrganization(this.form.organizationCode).subscribe(
      data => {
        this.ParticularsList = data.body
      },
      err => {
        console.error(err)
      }
    );
  }

  getOrganizationList(): void {
    this.organizationMasterService.getOrganizationList().subscribe(
      data => {
        this.OrganizationList = data.body
      },
      err => {
        console.error(err)
      }
    );
  }

  onTable(): void {
    this.service.get().subscribe(
      data => {
        this.table_data = data.body
      },
      err => {
        console.error(err)
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
        // testName = testCode ?
      },
      err => {
        console.error(err)
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
          console.error(err)
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
        console.error(err);
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
        console.error(err);
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
                console.error(err)
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
