import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PartyMasterService } from '../../../../_service/master/other_masters1/party-master.service';
import { AccountGroupService } from '../../../../_service/master/other_masters1/account-group.service';
import { SubGroupService } from '../../../../_service/master/other_masters1/sub-group.service';
import { SubGroup1Service } from '../../../../_service/master/other_masters1/sub-group1.service';
import { SubGroup2Service } from '../../../../_service/master/other_masters1/sub-group2.service';
import { MasterCategoryService } from '../../../../_service/static/master-category.service';

@Component({
  selector: 'app-party-master',
  templateUrl: './party-master.component.html',
  styleUrls: ['./party-master.component.css']
})
export class PartyMasterComponent implements OnInit {

  constructor(private service:PartyMasterService,
    private accountGroupService:AccountGroupService, 
    private subGroupService:SubGroupService,
    private subGroup1Service:SubGroup1Service,
    private subGroup2Service:SubGroup2Service,
    private masterCategoryService:MasterCategoryService) { }

  form: any = {};
  isSubmit = false;
  isEdit = false;
  table_data: any = [];
  AccountTypeList : any = [];
  GroupList : any = [];
  SubGroupList : any = [];
  SubGroup1List : any = [];
  SubGroup2List : any = [];

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.onTable()
    this.getAccountTypeList()
    this.getGroupList()
    this.getSubGroupList()
    this.getSubGroup1List()
    this.getSubGroup2List()
  }

  getSubGroupList():void{
    this.subGroupService.get().subscribe(
      data => {
        this.SubGroupList = data.body
      },
      err => {
        console.error(err)
      }
    );
  }
  getSubGroup1List():void{
    this.subGroup1Service.get().subscribe(
      data => {
        this.SubGroup1List = data.body
      },
      err => {
        console.error(err)
      }
    );
  }
  getSubGroup2List():void{
    this.subGroup2Service.get().subscribe(
      data => {
        this.SubGroup2List = data.body
      },
      err => {
        console.error(err)
      }
    );
  }
  
  getGroupList():void{
    this.accountGroupService.get().subscribe(
      data => {
        this.GroupList = data.body
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

  getAccountTypeList():void{
    this.masterCategoryService.getCategoryList("ACC TYPE").subscribe(
      data => {
        this.AccountTypeList = data.body
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

  onNew(): void {
    window.location.assign(window.location.href)
    
  }
  onSave(): void {
    console.log(this.isEdit)
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

}
