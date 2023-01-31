import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Book } from '../models/book.model';
@Component({
  selector: 'delete-book-dialog',
  templateUrl: './delete-book-dialog.html',
  styleUrls: ['./delete-book-dialog.scss']
})
export class DeleteBookDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteBookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {book: Book}
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
  deleteBook(book: Book): void {
    this.dialogRef.close(book);
  }
}