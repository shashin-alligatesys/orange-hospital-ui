import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import {AuthGuard} from './auth.guard';

import { HomeComponent } from './home/home.component';

// reception
import { RegistrationComponent } from './_pages/reception/reception_reception/registration/registration.component'; 
import { AppointmentComponent } from './_pages/reception/reception_reception/appointment/appointment.component'; 
import { AdmissionComponent } from './_pages/reception/reception_reception/admission/admission.component'; 
import { ScannedImageComponent } from './_pages/reception/reception_reception/scanned-image/scanned-image.component'; 

import { OpdComponent } from './_pages/reception/reception_bill/opd/opd.component';
import { RadioComponent } from './_pages/reception/reception_bill/radio/radio.component'; 
import { LabComponent } from './_pages/reception/reception_bill/lab/lab.component'; 
import { OpdhealthCheckupComponent } from './_pages/reception/reception_bill/opdhealth-checkup/opdhealth-checkup.component';
import { CashDuesComponent } from './_pages/reception/reception_bill/cash-dues/cash-dues.component'; 

import { OpdRefundComponent } from './_pages/reception/reception_bill_refund/opd-refund/opd-refund.component';
import { RadioRefundComponent } from './_pages/reception/reception_bill_refund/radio-refund/radio-refund.component';
import { LabRefundComponent } from './_pages/reception/reception_bill_refund/lab-refund/lab-refund.component';
import { OpdhealthCheckupRefundComponent } from './_pages/reception/reception_bill_refund/opdhealth-checkup-refund/opdhealth-checkup-refund.component'; 

// ipd
import { BillDetailSheetComponent } from './_pages/ipd/bill/bill-detail-sheet/bill-detail-sheet.component';
import { ProvisionalBillComponent } from './_pages/ipd/bill/provisional-bill/provisional-bill.component';
import { FinalIpdBillComponent } from './_pages/ipd/bill/final-ipd-bill/final-ipd-bill.component';
// import { IpdAdvancedComponent } from './_pages/ipd/bill/ipd-advanced/ipd-advanced.component';
// import { PaymentRefundComponent } from './_pages/ipd/bill/payment-refund/payment-refund.component'; 

import { BedShiftingComponent } from './_pages/ipd/bed/bed-shifting/bed-shifting.component';
import { BedStatusComponent } from './_pages/ipd/bed/bed-status/bed-status.component';
import { VacantBedComponent } from './_pages/ipd/bed/vacant-bed/vacant-bed.component'; 

import { BedDischargeComponent } from './_pages/ipd/dischange/bed-discharge/bed-discharge.component';
import { DischargeClearanceComponent } from './_pages/ipd/dischange/discharge-clearance/discharge-clearance.component'; 

// account
import { ReceiptComponent } from './_pages/account/entry/receipt/receipt.component';
import { PaymentComponent } from './_pages/account/entry/payment/payment.component'; 

// report
import { IpdRegisterComponent } from './_pages/report/register_report/ipd-register/ipd-register.component';
import { IpdReceiptRegisterComponent } from './_pages/report/register_report/ipd-receipt-register/ipd-receipt-register.component';
import { OpdRegisterComponent } from './_pages/report/register_report/opd-register/opd-register.component';
import { LabRegisterComponent } from './_pages/report/register_report/lab-register/lab-register.component';
import { RadioRegisterComponent } from './_pages/report/register_report/radio-register/radio-register.component';
import { HealthCheckupRegisterComponent } from './_pages/report/register_report/health-checkup-register/health-checkup-register.component';
import { CashDueReportComponent } from './_pages/report/register_report/cash-due-report/cash-due-report.component';
import { OrganizationReportComponent } from './_pages/report/register_report/organization-report/organization-report.component';

import { MisComponent } from './_pages/report/analysis_report/mis/mis.component';
import { GroupwiseTestwiseAnalysisComponent } from './_pages/report/analysis_report/groupwise-testwise-analysis/groupwise-testwise-analysis.component';

import { AdmissionDischargeComponent } from './_pages/report/routine_report/admission-discharge/admission-discharge.component';
import { FeeCollectionReportComponent } from './_pages/report/routine_report/fee-collection-report/fee-collection-report.component';

//Master
import { IpdTestComponent } from './_pages/master/test_master/ipd-test/ipd-test.component';
import { OpdTestComponent } from './_pages/master/test_master/opd-test/opd-test.component';

import { ConsultantDoctorComponent } from './_pages/master/doctor/consultant-doctor/consultant-doctor.component';
import { ReferringDoctorComponent } from './_pages/master/doctor/referring-doctor/referring-doctor.component';

import { OpdBillMasterComponent } from './_pages/master/bill_master/opd-bill-master/opd-bill-master.component';
import { LabBillMasterComponent } from './_pages/master/bill_master/lab-bill-master/lab-bill-master.component';
import { RadioBillMasterComponent } from './_pages/master/bill_master/radio-bill-master/radio-bill-master.component';

import { AppointmentSchedulerComponent } from './_pages/master/appointment_master/appointment-scheduler/appointment-scheduler.component';

import { IpdPackageMasterComponent } from './_pages/master/package_master/ipd-package-master/ipd-package-master.component';
import { OpdPackageMasterComponent } from './_pages/master/package_master/opd-package-master/opd-package-master.component';

import { DepartmentComponent } from './_pages/master/other_masters1/department/department.component';
import { SubdepartmentComponent } from './_pages/master/other_masters1/subdepartment/subdepartment.component';
import { ConcessionComponent } from './_pages/master/other_masters1/concession/concession.component';
import { SuperGroupComponent } from './_pages/master/other_masters1/super-group/super-group.component';
import { GroupComponent } from './_pages/master/other_masters1/group/group.component';
import { SubGroupComponent } from './_pages/master/other_masters1/sub-group/sub-group.component';
import { SubGroup1Component } from './_pages/master/other_masters1/sub-group1/sub-group1.component';
import { SubGroup2Component } from './_pages/master/other_masters1/sub-group2/sub-group2.component';
import { DoctorIncentiveMasterComponent } from './_pages/master/other_masters1/doctor-incentive-master/doctor-incentive-master.component';
import { RefDoctorIncentiveMasterComponent } from './_pages/master/other_masters1/ref-doctor-incentive-master/ref-doctor-incentive-master.component';
import { InsuranceMasterComponent } from './_pages/master/other_masters1/insurance-master/insurance-master.component';
import { CashlessAuthorizedComponent } from './_pages/master/other_masters1/cashless-authorized/cashless-authorized.component';
import { DischargeSummaryComponent } from './_pages/master/other_masters1/discharge-summary/discharge-summary.component';
import { DischargeSummaryTemplateMasterComponent } from './_pages/master/other_masters1/discharge-summary-template-master/discharge-summary-template-master.component';
import { DoctorHoursAbsenteeEntryComponent } from './_pages/master/other_masters1/doctor-hours-absentee-entry/doctor-hours-absentee-entry.component';
import { DeathSummaryComponent } from './_pages/master/other_masters1/death-summary/death-summary.component';
import { TdsMasterComponent } from './_pages/master/other_masters1/tds-master/tds-master.component';
import { CasepaperMedicineMasterComponent } from './_pages/master/other_masters1/casepaper-medicine-master/casepaper-medicine-master.component';

import { OrganizationComponent } from './_pages/master/other_masters2/organization/organization.component';
import { TpaMasterComponent } from './_pages/master/other_masters2/tpa-master/tpa-master.component';
import { ClassMasterComponent } from './_pages/master/other_masters2/class-master/class-master.component';
import { WardMasterComponent } from './_pages/master/other_masters2/ward-master/ward-master.component';
import { PartyMasterComponent } from './_pages/master/other_masters2/party-master/party-master.component';
import { PlasticMoneyMasterComponent } from './_pages/master/other_masters2/plastic-money-master/plastic-money-master.component';
import { PatientTypeMatserComponent } from './_pages/master/other_masters2/patient-type-matser/patient-type-matser.component';
import { DoctorPayableEntryComponent } from './_pages/master/other_masters2/doctor-payable-entry/doctor-payable-entry.component';
import { ExternalLabMasterComponent } from './_pages/master/other_masters2/external-lab-master/external-lab-master.component';
import { ExternalRadioMasterComponent } from './_pages/master/other_masters2/external-radio-master/external-radio-master.component';
import { ExternalLabTestMasterComponent } from './_pages/master/other_masters2/external-lab-test-master/external-lab-test-master.component';
import { ExternalRadioTestMasterComponent } from './_pages/master/other_masters2/external-radio-test-master/external-radio-test-master.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  {
    path: 'admin-board', component: BoardAdminComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN'
    }
  },
  {
    path: 'user-board', component: BoardUserComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_USER'
    }
  },

/*
 *Start Dev <<<<<<<<<<<<<<<<<<<<<<
 */

/*
*
*       Menu Style : = Menu-Sub_Menu-Sub_Item
*
*/


 /** 
  * ===============================================================
  * Reception Start <<<<<<<<<<<<<<<<
  * ===============================================================
 */

 /** 
  * reception_reception <<<<<<<<<<<<<<
 */
  {
    path: 'reception-reception-registration', component: RegistrationComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN,ROLE_USER'
    }
  },
  {
    path: 'reception-reception-appointment', component: AppointmentComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN,ROLE_USER'
    }
  },
  {
    path: 'reception-reception-admission', component: AdmissionComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN,ROLE_USER'
    }
  },
  {
    path: 'reception-reception-scannedimage', component: ScannedImageComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN,ROLE_USER'
    }
  },
  /** 
  * reception_reception >>>>>>>>>>>>
 */

/** 
  * reception_bill <<<<<<<<<<<<<<
 */
  {
    path: 'reception-bill-opd', component: OpdComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN,ROLE_USER'
    }
  },
  {
    path: 'reception-bill-radio', component: RadioComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN,ROLE_USER'
    }
  },
  {
    path: 'reception-bill-lab', component: LabComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN,ROLE_USER'
    }
  },

  {
    path: 'reception-bill-opdhealth_checkup', component: OpdhealthCheckupComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN,ROLE_USER'
    }
  },
  {
    path: 'reception-bill-cash_dues', component: CashDuesComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN,ROLE_USER'
    }
  },

  /** 
  * reception_bill >>>>>>>>>>>>>
 */


/** 
  * reception_bill_refund <<<<<<<<<<<<<
 */

{
  path: 'reception-bill_refund-opd_refund', component: OpdRefundComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'reception-bill_refund-radio_refund', component: RadioRefundComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'reception-bill_refund-lab_refund', component: LabRefundComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'reception-bill_refund-opdhealth_checkup_refund', component: OpdhealthCheckupRefundComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},

/** 
  * reception_bill_refund >>>>>>>>>>>>>
 */

 /** 
  * ===============================================================
  * Reception End >>>>>>>>>>>>>>>>>>>>>>
  * ===============================================================
 */


 /** 
  * ===============================================================
  * IPD Start <<<<<<<<<<<<<<<<
  * ===============================================================
 */

/** 
  * Bill <<<<<<<<<<<<<<
 */
{
  path: 'ipd-bill-bill_detail_sheet', component: BillDetailSheetComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'ipd-bill-provisional_bill', component: ProvisionalBillComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'ipd-bill-final_ipd_bill', component: FinalIpdBillComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
// {
//   path: 'account-entry-receipt', component: ReceiptComponent,
//   canActivate: [AuthGuard],
//   data: {
//     role: 'ROLE_ADMIN,ROLE_USER'
//   }
// },
// {
//   path: 'ipd-bill-payment_refund', component: PaymentComponent,
//   canActivate: [AuthGuard],
//   data: {
//     role: 'ROLE_ADMIN,ROLE_USER'
//   }
// },
/** 
  * Bill >>>>>>>>>>>>>
 */

 /** 
  * Bed <<<<<<<<<<<<<<<<<<<<<<
 */
{
  path: 'ipd-bed-bed_shifting', component: BedShiftingComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'ipd-bed-bed_status', component: BedStatusComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'ipd-bed-vacant_bed', component: VacantBedComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
/** 
  * Bed >>>>>>>>>>>>>>>>>>>>
 */

 /** 
  * dischange <<<<<<<<<<<<<<<<<<<<
 */
{
  path: 'ipd-dischange-bed_discharge', component: BedDischargeComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'ipd-dischange-discharge_clearance', component: DischargeClearanceComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
/** 
  * dischange >>>>>>>>>>>>>>>>>>>>
 */

 /** 
  * ===============================================================
  * IPD End >>>>>>>>>>>>>>>>>>>>
  * ===============================================================
 */



 /** 
  * ===============================================================
  * Account Start <<<<<<<<<<<<<<<
  * ===============================================================
 */

/** 
  * entry <<<<<<<<<<<<<<<<<<
 */

{
  path: 'account-entry-receipt', component: ReceiptComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'account-entry-payment', component: PaymentComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},

 /** 
  * entry >>>>>>>>>>>>>>>>>>>>
 */


/** 
  * ===============================================================
  * Account End >>>>>>>>>>>>>>>
  * ===============================================================
 */

/** 
  * ===============================================================
  * Report Start >>>>>>>>>>>>>>>
  * ===============================================================
 */

   /** 
  * register_report <<<<<<<<<<<<<<<<<<
 */
{
  path: 'report-register_report-ipd_register', component: IpdRegisterComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'report-register_report-ipd_receipt_register', component: IpdReceiptRegisterComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'report-register_report-opd_register', component: OpdRegisterComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'report-register_report-lab_register', component: LabRegisterComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'report-register_report-radio_register', component: RadioRegisterComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'report-register_report-health_checkup_register', component: HealthCheckupRegisterComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'report-register_report-cash_due_report', component: CashDueReportComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'report-register_report-organization_report', component: OrganizationReportComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
  /** 
  * register_report >>>>>>>>>>>>>>>>>>>>
 */

   /** 
  * analysis_report <<<<<<<<<<<<<<<<<<<<<
 */
{
  path: 'report-analysis_report-mis', component: MisComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'report-analysis_report-groupwise_testwise_analysis', component: GroupwiseTestwiseAnalysisComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
  /** 
  * analysis_report >>>>>>>>>>>>>>>>>>>>
 */

   /** 
  * routine_report >>>>>>>>>>>>>>>>>>>>
 */
{
  path: 'report-routine_report-admission_discharge', component: AdmissionDischargeComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'report-routine_report-fee_collection_report', component: FeeCollectionReportComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
   /** 
  * routine_report >>>>>>>>>>>>>>>>>>>>
 */

 /** 
  * ===============================================================
  * Report End >>>>>>>>>>>>>>>
  * ===============================================================
 */



 /** 
  * ===============================================================
  * Masters Start <<<<<<<<<<<<<<<<<<<<<
  * ===============================================================
 */

 
    /** 
  * test_master <<<<<<<<<<<<<<<<<<<
 */
{
  path: 'master-test_master-ipd_test', component: IpdTestComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-test_master-opd_test', component: OpdTestComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
    /** 
  * test_master >>>>>>>>>>>>>>>>>>>>
 */

   /** 
  * doctor <<<<<<<<<<<<<<<<<<<
 */
{
  path: 'master-doctor-consultant_doctor', component: ConsultantDoctorComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-doctor-referring_doctor', component: ReferringDoctorComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
    /** 
  * doctor >>>>>>>>>>>>>>>>>>>>
 */

     /** 
  * bill_master <<<<<<<<<<<<<<<<<<<
 */
{
  path: 'master-bill_master-opd_bill_master', component: OpdBillMasterComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-bill_master-lab_bill_master', component: LabBillMasterComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-bill_master-radio_bill_master', component: RadioBillMasterComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
    /** 
  * bill_master >>>>>>>>>>>>>>>>>>>>
 */

   /** 
  * appointment_master <<<<<<<<<<<<<<<<<<<
 */
{
  path: 'master-appointment_master-appointment_scheduler', component: AppointmentSchedulerComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
    /** 
  * appointment_master >>>>>>>>>>>>>>>>>>>>
 */

    /** 
  * package_master <<<<<<<<<<<<<<<<<<<
 */
{
  path: 'master-package_master-ipd_package_master', component: IpdPackageMasterComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-package_master-opd_package_master', component: OpdPackageMasterComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
    /** 
  * package_master >>>>>>>>>>>>>>>>>>>>
 */

    /** 
  * other_masters1 <<<<<<<<<<<<<<<<<<<
 */
{
  path: 'master-other_masters1-department', component: DepartmentComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters1-subdepartment', component: SubdepartmentComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters1-concession', component: ConcessionComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters1-super_group', component: SuperGroupComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters1-group', component: GroupComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters1-sub_group', component: SubGroupComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters1-sub_group1', component: SubGroup1Component,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters1-sub_group2', component: SubGroup2Component,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters1-doctor_incentive_master', component: DoctorIncentiveMasterComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters1-ref_doctor_incentive_master', component: RefDoctorIncentiveMasterComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters1-insurance_master', component: InsuranceMasterComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters1-cashless_authorized', component: CashlessAuthorizedComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters1-discharge_summary', component: DischargeSummaryComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters1-discharge_summary_template_master', component: DischargeSummaryTemplateMasterComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters1-doctor_hours_absentee_entry', component: DoctorHoursAbsenteeEntryComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters1-death_summary', component: DeathSummaryComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters1-tds_master', component: TdsMasterComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters1-casepaper_medicine_master', component: CasepaperMedicineMasterComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
    /** 
  * other_masters1 >>>>>>>>>>>>>>>>>>>>
 */

    /** 
  * other_masters2 <<<<<<<<<<<<<<<<<<<
 */
{
  path: 'master-other_masters2-organization', component: OrganizationComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters2-tpa_master', component: TpaMasterComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters2-class_master', component: ClassMasterComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters2-ward_master', component: WardMasterComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters2-party_master', component: PartyMasterComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters2-plastic_money_master', component: PlasticMoneyMasterComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters2-patient_type_matser', component: PatientTypeMatserComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters2-doctor_payable_entry', component: DoctorPayableEntryComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters2-external_lab_master', component: ExternalLabMasterComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters2-external_radio_master', component: ExternalRadioMasterComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters2-external_lab_test_master', component: ExternalLabTestMasterComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
{
  path: 'master-other_masters2-external_radio_test_master', component: ExternalRadioTestMasterComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_ADMIN,ROLE_USER'
  }
},
    /** 
  * other_masters2 >>>>>>>>>>>>>>>>>>>>
 */

/** 
  * ===============================================================
  * Masters End >>>>>>>>>>>>>>>
  * ===============================================================
 */

  /*
 *End Dev >>>>>>>>>>>>>>>>>>>>
 */

  { path: '', redirectTo: 'login', pathMatch: 'full' },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
