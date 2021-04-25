import { Component, OnInit } from '@angular/core';
import { AdmissionService } from 'src/app/_service/reception/reception_reception/admission.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { ReceiptService } from 'src/app/_service/account/entry/receipt.service';
import { PlasticMoneyMasterService } from 'src/app/_service/master/other_masters1/plastic-money-master.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  constructor(private getService: AdmissionService,
    private activatedroute: ActivatedRoute,
    private service: ReceiptService,
    private plasticMoneyMasterService: PlasticMoneyMasterService) { }

  form: any = {};
  isSubmit = false;
  isEdit = false;
  table_data: any = [];
  spinner = false
  isPLASTICMONEY = false
  isCHEQUE = false
  PlasticInstrumentNameList: any = [];
  PatientDetails: any = [];

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getPatientDetailList()
    this.onTable(0)
    this.getPlasticInstrumentNameList()

    this.activatedroute.queryParams.subscribe(data => {
      console.log(data['search'])
      this.form.ipdno = data['search']

      // if (data['search'] != 0) {
      //   // this.filterPatientDetails()
      // }

    });

    this.form.dept = "16"
    this.form.receiptDate = new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString().split('T')[0]
  }

  getPatientDetailList(): void {
    this.getService.getPatientDetailList().subscribe(
      data => {
        if (data.status == 200) {
          this.PatientDetails = data.body.filter(opt => opt.name = opt.name + "(" + opt.uhid + ")");
          this.filterPatientDetails()
        }
      },
      err => {
        console.error(err)
      }
    );
  }

  filterPatientByName(): void {
    const SortRow = this.PatientDetails.find((e => e.name == this.form.receivedFrom))
    this.form.ipdno = SortRow.ipd
    this.form.uhid = SortRow.uhid
  }

  filterPatientDetails(): void {
    this.form.uhid = ""
    this.form.receivedFrom = ""
    if (this.form.ipdno != null && this.form.ipdno.length >= 0 && this.form.ipdno != "") {
      const SortRow = this.PatientDetails.find((e => e.ipd == this.form.ipdno))
      if (SortRow != null) {
        this.form.ipdno = SortRow.ipd
        this.form.uhid = SortRow.uhid
        this.form.receivedFrom = SortRow.name
      }
    }
  }

  getPlasticInstrumentNameList(): void {
    this.plasticMoneyMasterService.get().subscribe(
      data => {
        this.PlasticInstrumentNameList = data.body
      },
      err => {
        console.error(err)
      }
    );
  }

  onTable(flag): void {
    if (flag == 0) {
      var currentDate = new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString().split('T')[0]
      this.service.getByDate(currentDate).subscribe(
        data => {
          this.table_data = data.body
        },
        err => {
          console.error(err)
        }
      );
    }
    if (flag == 1) {
      this.service.get().subscribe(
        data => {
          this.table_data = data.body
        },
        err => {
          console.error(err)
        }
      );
    }
    if (flag == 2) {
      this.service.getByDate(this.form.getByDate).subscribe(
        data => {
          this.table_data = data.body
        },
        err => {
          console.error(err)
        }
      );
    }
  }

  getPdf(uhid){
    if(uhid !=null && uhid !="undefined"){
    this.service.printReport('pdf',uhid).subscribe(
      data => {
        if (data.size == 0) {
          Swal.fire({
            title: 'Error!',
            html: '<i>Data Not Found OR Error !</i>',
            icon: 'error',
            confirmButtonText: 'OK',
            width: 350
          })
        } else {
          const fileURL = URL.createObjectURL(data);
          window.open(fileURL, '_blank');
        }
      },
      err => {
        console.log(err)
      }
    );
    }
  }
  getxlsx(uhid){
    if(uhid !=null && uhid !="undefined"){
    this.service.printReport('xlsx',uhid).subscribe(
      data => {
        if (data.size == 0) {
          Swal.fire({
            title: 'Error!',
            html: '<i>Data Not Found OR Error !</i>',
            icon: 'error',
            confirmButtonText: 'OK',
            width: 350
          })
        } else {
          const fileURL = URL.createObjectURL(data);
          window.open(fileURL, '_blank');
        }
      },
      err => {
        console.log(err)
      }
    );
  }
  }

  onNew(): void {
    window.location.assign(window.location.href)

  }

  typeChange(): void {
    console.log(this.form.type)

    this.isPLASTICMONEY = false
    this.isCHEQUE = false

    if (this.form.type == "PLASTICMONEY") {
      this.isPLASTICMONEY = true
    }
    if (this.form.type == "CHEQUE") {
      this.isCHEQUE = true
    }

  }

  onSave(): void {
    console.log(this.isEdit)
    if (this.isEdit) {
      this.onUpdate();
    } else {
      this.onSubmit();
    }
  }

  onEdit(row): void {
    this.form = {};
    window.scrollTo(0, 0);
    this.form = row
    this.isEdit = true;
    this.typeChange()
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
      if (result.isConfirmed) {
      this.service.delete(id).subscribe(
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

  n: any = []
  inWords(): void {
    var num = this.form.amount
    var a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
    var b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    if ((num = num.toString()).length > 9) this.form.words = 'overflow';
    this.n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!this.n) return; var str = '';
    str += (this.n[1] != 0) ? (a[Number(this.n[1])] || b[this.n[1][0]] + ' ' + a[this.n[1][1]]) + 'Crore ' : '';
    str += (this.n[2] != 0) ? (a[Number(this.n[2])] || b[this.n[2][0]] + ' ' + a[this.n[2][1]]) + 'Lakh ' : '';
    str += (this.n[3] != 0) ? (a[Number(this.n[3])] || b[this.n[3][0]] + ' ' + a[this.n[3][1]]) + 'Thousand ' : '';
    str += (this.n[4] != 0) ? (a[Number(this.n[4])] || b[this.n[4][0]] + ' ' + a[this.n[4][1]]) + 'Hundred ' : '';
    str += (this.n[5] != 0) ? ((str != '') ? '' : '') + (a[Number(this.n[5])] || b[this.n[5][0]] + ' ' + a[this.n[5][1]]) + '' : '';
    // return str;
    str += 'Rupees Only';
    this.form.words = str
  }

}
