import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { catchError, concatMap, EMPTY, Observable, switchMap, tap } from 'rxjs';
import { Book } from '../models/book.model';
import { DataService } from '../services/data.service';

export interface BooksState {
  books: Book[];
}
@Injectable()
export class BooksStore extends ComponentStore<BooksState> {

    constructor(private dataService: DataService){
        super({
            books: []
        });
        this.fetchBooks();
    }
    books$: Observable<Book[]> = this.select(state => state.books);

    addBook$ = this.updater((state: any, newBook: Book) => ({
        ...state,
        books: [newBook, ...state.books]
    }));
    
    setBooks = this.updater((state, books: Book[]) => ({
        ...state,
        books,
    }));

    deleteBook$ = this.updater((state: any, book: Book) => {
        const booksCopy = [...state.books];
        const index = booksCopy.findIndex(currentBook=> currentBook.title === book.title);
        booksCopy.splice(index, 1);
        return {
            ...state,
            books: booksCopy
        };
    });

    sortBooks$ = this.updater((state: any, key: string) => {
        const books = [...state.books];
        books.sort((a, b) => a[key].toLowerCase() > b[key].toLowerCase() ? 1 : -1);
        return {
            ...state,
            books
        };
    });

    readonly fetchBooks = this.effect((trigger$) =>
        trigger$.pipe(
            switchMap(() =>
                this.dataService.getBooks().pipe(
                    tap((books: Book[]) => {
                        this.setBooks(books);
                    }),
                    catchError(() => EMPTY)
                )
            )
        )
    );
}