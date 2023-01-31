import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Book } from "../models/book.model";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DataService {
    constructor(){}
    books: Book[] = [
        {
            title: 'Book A',
            image: 'https://sothebys-md.brightspotcdn.com/dims4/default/9617178/2147483647/strip/true/crop/1000x1000+0+0/resize/2048x2048!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2F3e%2Fe9%2F629388774922903c2c28e0e485c8%2Fimg-4664.JPG',
            publishedDate: '2015'
        },
        {
            title: 'Book D',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3b9XxsS49KycQCtxs5De8z81icfyxYApRYQ&usqp=CAU',
            publishedDate: '2023'
        },
        {
            title: 'Book Z',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDaHJhYy12o56JcOMfGRhfffW90sNMlY68QQ&usqp=CAU',
            publishedDate: '2016'
        },
        {
            title: 'Book G',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_EbZV7fbHCOC-oHNT0N1cUIF9lG9z76AjfA&usqp=CAU',
            publishedDate: '2022'
        },
        {
            title: 'Book H',
            image: 'https://sothebys-md.brightspotcdn.com/dims4/default/9617178/2147483647/strip/true/crop/1000x1000+0+0/resize/2048x2048!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2F3e%2Fe9%2F629388774922903c2c28e0e485c8%2Fimg-4664.JPG',
            publishedDate: '2015'
        },
        {
            title: 'Book J',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3b9XxsS49KycQCtxs5De8z81icfyxYApRYQ&usqp=CAU',
            publishedDate: '2017'
        },
        {
            title: 'Book B',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDaHJhYy12o56JcOMfGRhfffW90sNMlY68QQ&usqp=CAU',
            publishedDate: '2019'
        },
        {
            title: 'Book Y',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_EbZV7fbHCOC-oHNT0N1cUIF9lG9z76AjfA&usqp=CAU',
            publishedDate: '2018'
        },
        {
            title: 'Book C',
            image: 'https://sothebys-md.brightspotcdn.com/dims4/default/9617178/2147483647/strip/true/crop/1000x1000+0+0/resize/2048x2048!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2F3e%2Fe9%2F629388774922903c2c28e0e485c8%2Fimg-4664.JPG',
            publishedDate: '2014'
        },
        {
            title: 'Book T',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3b9XxsS49KycQCtxs5De8z81icfyxYApRYQ&usqp=CAU',
            publishedDate: '2013'
        },
    ];
    getBooks(){
        return of(this.books);
    }
    deleteBook(book: Book): Observable<any> {
        const index = this.books.findIndex((b) => b.title === book.title);
        this.books.splice(index, 1);
        console.log(index);
        return of(this.books);
    }
}