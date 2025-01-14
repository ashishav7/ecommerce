import { Inject, Injectable } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogsComponent } from '../shared/component/dialogs/dialogs.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  
  constructor(private dialog: MatDialog,
  ) {}

  confirm(title:string,message: string): Observable<boolean> {
    const dialogRef = this.dialog.open(DialogsComponent, {
      width: 'auto',
      data: { title,message }
    });

    return dialogRef.afterClosed();
  }
}
