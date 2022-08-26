import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable, tap } from 'rxjs';
import { Staff } from '../models/staff.model';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  constructor(private db: AngularFirestore) { }

  staffCollectionRef = this.db.collection('staffs');

  getAll() {
    return this.staffCollectionRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ ...c.payload.doc.data() as any, id: c.payload.doc.id })
        )
      ));
  }

  add(staff: Staff) {
    return this.staffCollectionRef.add(staff);
  }

  update(staff: Staff) {
    return this.staffCollectionRef.doc(staff.id).update(staff);
  }

  delete(staffId: string) {
    return this.staffCollectionRef.doc(staffId).delete();

  }
}
