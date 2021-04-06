import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { IpdPackageMasterService } from '../../../../_service/master/package_master/ipd-package-master.service';
import { GroupService } from 'src/app/_service/master/other_masters1/group.service';

@Component({
  selector: 'app-lab-bill-master',
  templateUrl: './lab-bill-master.component.html',
  styleUrls: ['./lab-bill-master.component.css']
})
export class LabBillMasterComponent implements OnInit {

  constructor(private service: IpdPackageMasterService,
    private groupService: GroupService) { }

  form: any = {};
  isSubmit = false;
  isEdit = false;
  table_data: any = [];
  GruopList: any = [];

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getGruopList()
  }

  getGruopList(): void {
    this.groupService.getGruopListByDepartment(84).subscribe(
      data => {
        this.GruopList = data.body
      },
      err => {
        console.log(err)
      }
    );
  }

  onSave(): void {
    this.form.details = this.DetailsList
      // this.onSubmit();
  }

  // onSubmit(): void {
  //   this.isSubmit = true;
  //   this.service.save(this.form).subscribe(
  //     data => {
  //       this.isSubmit = false;
  //       if (data.status == 200) {
  //         Swal.fire({
  //           title: 'Success!',
  //           text: data.message,
  //           icon: 'success',
  //           confirmButtonText: 'OK',
  //           width: 300
  //         }).then((result) => {
  //           if (result.isConfirmed) {
  //             window.location.reload();
  //           }
  //         });
  //       } else {
  //         var error = "";
  //         error += data.message + '\n'
  //         if (data.fieldErrorMessageList != null) {
  //           for (var ob of data.fieldErrorMessageList) {
  //             error += ob.fieldName + " : " + ob.errorMessage + '\n'
  //           }
  //         }
  //         Swal.fire({
  //           title: 'Error!',
  //           text: data.message,
  //           html: '<pre>' + error + '</pre>',
  //           icon: 'error',
  //           confirmButtonText: 'OK',
  //           width: 350
  //         })
  //       }
  //     },
  //     err => {
  //       this.isSubmit = false;
  //       console.log(err);
  //     }
  //   )
  // }


  public DetailsList: any[] = [{
    sno: 1,
    id: 0,
    testName: '',
    qty: 0,
    rate: 0,
    amount: 0
  }];

  addAddress() {
    this.DetailsList.push({
      sno: this.DetailsList.length + 1,
      id: 0,
      testName: '',
      qty: 0,
      rate: 0,
      amount: 0
    });
  }

  removeAddress(i: number) {
    if (confirm("Are you sure you want to remove it?")) {
        this.DetailsList.splice(i, 1);
    }
  }

  calculateTotal(i): void {
    console.log(i)
  }

}
