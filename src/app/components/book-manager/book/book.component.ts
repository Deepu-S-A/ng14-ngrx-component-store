import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../../models/book.model';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() book!: Book;
  @Output() tobeDeleted = new EventEmitter<Book>();
}
