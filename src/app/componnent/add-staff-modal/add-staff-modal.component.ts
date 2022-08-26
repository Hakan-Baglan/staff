import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Staff } from 'src/app/models/staff.model';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-add-staff-modal',
  templateUrl: './add-staff-modal.component.html',
  styleUrls: ['./add-staff-modal.component.scss']
})
export class AddStaffModalComponent implements OnInit {
  staff!: Staff;
  form!: FormGroup;
  text: string = '';
  constructor(protected ref: NbDialogRef<AddStaffModalComponent>,
    private fb: FormBuilder,
    private staffService: StaffService) {


  }

  ngOnInit(): void {
    this.textLanguage();
    this.initForm();

  }

  initForm() {
    this.form = this.fb.group({
      name: [null, Validators.required],
      surname: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]]
    });

    if (this.staff) this.form.patchValue(this.staff);
  }

  textLanguage() {
    let language = localStorage.getItem('language');
    if (this.staff) {
      this.text = language === 'en' ? 'Edit' : 'Düzenle'
    } else {
      this.text = language === 'tr' ? 'Add' : 'Ekle'
    }
  }

  send() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.staff) {
      this.staffService.update({ id: this.staff.id, ...this.form.value });
    } else {
      this.staffService.add(this.form.value);
    }
    this.ref.close();
  }

  close() {
    this.ref.close();
  }

  hasError(formName: FormGroup, ctrlName: string, error = 'required') {
    return formName.get(ctrlName)?.touched && formName.get(ctrlName)?.hasError(error);
  }
}
