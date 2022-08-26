import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Staff } from 'src/app/models/staff.model';
import { StaffService } from 'src/app/services/staff.service';
import { AddStaffModalComponent } from '../add-staff-modal/add-staff-modal.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  staffs = this.staffService.getAll()
  constructor(private staffService: StaffService, private dialog: NbDialogService) { }

  ngOnInit(): void {
  }

  openModal(staff: Staff) {
    this.dialog.open(AddStaffModalComponent, { dialogClass: 'modal', context: { staff } });
  }

  delete(staffId: string) {
    let language = localStorage.getItem('language');
    let text;
    if (language === 'en') {
      text = 'Are you sure you want to delete';
    } else if (language === 'tr') {
      text = 'Silmek istediğinize emin misiniz';
    }
    Swal.fire({
      text: text,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Evet',
      cancelButtonText: 'Hayır',
    }).then(result => {
      if (result.isConfirmed) {
        this.staffService.delete(staffId);
      }

    });

  }

}
