import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { Staff } from 'src/app/models/staff.model';
import { StaffService } from 'src/app/services/staff.service';
import { AddStaffModalComponent } from '../add-staff-modal/add-staff-modal.component';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  language: string = '';
  constructor(
    private dialog: NbDialogService,
    private translateServ: TranslateService,
    private staffServ: StaffService
  ) { }

  ngOnInit(): void {
    this.staffServ.getAll();
    this.changeLang('en');
  }

  openModal() {
    this.dialog.open(AddStaffModalComponent, { dialogClass: 'modal' });
  }

  changeLang(lang: string) {
    this.language = lang;
    localStorage.setItem('language', lang)
    this.translateServ.use(lang);
    this.translateServ.setDefaultLang(lang);
  }

}
