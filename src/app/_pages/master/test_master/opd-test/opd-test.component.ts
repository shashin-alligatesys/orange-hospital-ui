import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { SuperGroupService } from '../../../../_service/master/other_masters1/super-group.service';
import { GroupService } from '../../../../_service/master/other_masters1/group.service';
import { SubGroupService } from '../../../../_service/master/other_masters1/sub-group.service';
import { SubdepartmentService } from '../../../../_service/master/other_masters1/subdepartment.service';
import { OrganizationMasterService } from '../../../../_service/static/organization-master.service';
import { OpdService } from '../../../../_service/master/test_master/opd.service';

@Component({
  selector: 'app-opd-test',
  templateUrl: './opd-test.component.html',
  styleUrls: ['./opd-test.component.css']
})
export class OpdTestComponent implements OnInit {
 

  constructor(private service:OpdService,
    private superGroupService:SuperGroupService,
    private groupService:GroupService,
    private subGroupService:SubGroupService,
    private subdepartmentService:SubdepartmentService,
    private organizationMasterService:OrganizationMasterService) { }

  form: any = {};
  isSubmit = false;
  isEdit = false;
  table_data: any = [];

  SuperGroupList: any = [];
  GroupList: any = [];
  SubGroupList: any = [];
  SubDepartmentList: any = [];
  OrganizationList: any = [];

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.onTable()
    this.getCategories()
  }

  getCategories(): void{
    
    this.superGroupService.get().subscribe(
      data => {
        this.SuperGroupList = data.body
      },
      err => {
        console.error(err)
      }
    );

    this.groupService.get().subscribe(
      data => {
        this.GroupList = data.body
      },
      err => {
        console.error(err)
      }
    );

    this.subGroupService.get().subscribe(
      data => {
        this.SubGroupList = data.body
      },
      err => {
        console.error(err)
      }
    );

    this.subdepartmentService.get().subscribe(
      data => {
        this.SubDepartmentList = data.body
      },
      err => {
        console.error(err)
      }
    );

    this.organizationMasterService.get().subscribe(
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
    this.form.testNo = row.id
    this.form.superGroup = Number(row.superGroup)
    this.form.groupName = Number(row.groupName)
    this.form.subGroup = Number(row.subGroup)
    this.form.subDepartment = Number(row.subDepartment)
    this.form.organizationName = Number(row.organizationName)
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
