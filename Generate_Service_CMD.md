**Generate Service**

{{{{{{{{{{{{{{{{{Static}}}}}}}}}}}}}}}}}
ng generate service _service/static/bedmaster
ng generate service _service/static/organization_master   
ng generate service _service/static/doctor_reference   
ng generate service _service/static/consultant_master
ng generate service _service/static/master_category

{{{{{{{{{{{{{{{{{Static}}}}}}}}}}}}}}}}}


{{{{{{{{{{{{{{{{{Reception}}}}}}}}}}}}}}}}}
*************reception_reception*************
ng generate service _service/reception/reception_reception/registration
ng generate service _service/reception/reception_reception/admission

{{{{{{{{{{{{{{{IPD}}}}}}}}}}}}}}}

*******************Bill*****************
ng generate service _service/ipd/bill/ipd_advanced




ng generate service _service/account/entry/receipt
ng generate service _service/master/other_masters1/department
ng generate service _service/master/other_masters1/subdepartment
ng generate service _service/master/other_masters1/plastic_money_master
ng generate service _service/master/other_masters1/class_master
ng generate service _service/master/other_masters1/ward_master
ng generate service _service/master/other_masters1/super_group
ng generate service _service/master/other_masters1/group
ng generate service _service/master/other_masters1/sub_group
ng generate service _service/master/other_masters1/sub_group1
ng generate service _service/master/other_masters1/sub_group2
ng generate service _service/master/other_masters1/insurance_master
ng generate service _service/master/other_masters1/tds_master
ng generate service _service/master/other_masters1/casepaper_medicine_master
ng generate service _service/master/other_masters1/external_lab_master
ng generate service _service/master/other_masters1/external_radio_master
ng generate service _service/master/other_masters1/concession

ng generate service _service/master/package_master/ipd_package_master
ng generate service _service/master/package_master/opd_package_master

ng generate service _service/master/appointment_master/appointment_scheduler

ng generate service _service/master/test_master/ipd
ng generate service _service/master/test_master/opd

ng generate service _service/master/other_masters1/death_summary
ng generate service _service/master/other_masters1/discharge_summary
ng generate service _service/master/other_masters1/discharge_summary_template_master

ng generate service _service/reception/reception_bill/opd
ng generate service _service/reception/reception_bill/radio
ng generate service _service/reception/reception_bill/lab