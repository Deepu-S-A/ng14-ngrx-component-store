import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book } from '../../models/book.model';
import { Author } from '../../models/author.model';
import { BooksStore } from '../../stores/books.store';
import { DeleteBookDialogComponent } from 'src/app/dialogs/delete-book-dialog';

@Component({
  selector: 'app-book-manager',
  templateUrl: './book-manager.component.html',
  styleUrls: ['./book-manager.component.scss'],
  providers: [BooksStore]
})
export class BookManagerComponent {
  constructor(private bookStore: BooksStore, private dialog: MatDialog){}
  books$ = this.bookStore.books$;
  sortBy: string = "";
  author: Author = {
    name: "Deepu S A",
    birthday: "22-07-1988",
    placeOfBirth: "Perumbavoor"
  };

  openDeleteBookDialog(book: Book){
    const dialogRef = this.dialog.open(DeleteBookDialogComponent, {
      data: { book },
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.bookStore.deleteBook(book);
      }
    });
  }

  addBook(){
    this.bookStore.addBook$({
      title: 'Book5',
      image: '',
      publishedDate: '15-08-2022'
    });
  }

  sortListBy(key: string) {
    this.bookStore.sortBooks$(key);
  }

  deleteBook(book: Book) {
    this.bookStore.deleteBook$(book);
  }
}
 