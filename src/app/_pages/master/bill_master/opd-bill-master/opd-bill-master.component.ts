import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { OpdService } from 'src/app/_service/master/test_master/opd.service';
import { GroupService } from 'src/app/_service/master/other_masters1/group.service';

@Component({
  selector: 'app-opd-bill-master',
  templateUrl: './opd-bill-master.component.html',
  styleUrls: ['./opd-bill-master.component.css']
})
export class OpdBillMasterComponent implements OnInit {

  constructor(private groupService: GroupService,
    private opdService:OpdService) { }

  form: any = {};
  isSubmit = false;
  isEdit = false;
  table_data: any = [];
  GruopList: any = [];
  ParticularsList:any = [];

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getGruopList()
  }

  fillParticularsData(i): void{
    const SortRow=this.ParticularsList.find((e => e.id == Number(this.DetailsList[i].testName)))
    this.DetailsList[i].qty = 1
    this.DetailsList[i].rate = SortRow.rate
    this.DetailsList[i].amount = SortRow.rate
  }

  getParticularsList(i):void{
    this.opdService.getParticularsListByGroup(this.DetailsList[i].group).subscribe(
      data => {
        this.ParticularsList = data.body
      },
      err => {
        console.error(err)
      }
    );
  }
  

  getGruopList(): void {
    this.groupService.getGruopListByDepartmentAndSuperGroup(17,35).subscribe(
      data => {
        this.GruopList = data.body
      },
      err => {
        console.error(err)
      }
    );
  }

  onSave(): void {
    this.form.details = this.DetailsList
    console.log(this.form)
      this.onSubmit();
  }

  onSubmit(): void {
    this.isSubmit = true;
    this.opdService.updateRate(this.DetailsList[0]).subscribe(
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
    group: '',
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
      group: '',
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
    this.DetailsList[i].amount = this.DetailsList[i].qty * this.DetailsList[i].rate
  }

}
