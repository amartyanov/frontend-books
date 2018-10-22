import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { BookLibraryModule } from './book-library.module';
import { Book } from './models/Book';
import { ApiClientService } from 'src/app/shared/api/api-client.service';

export interface BookDTO {
	id: number;
	name: string;
	cover?: string;
	description: string;
	author: string[];
	publisher: string;
	isbn: number;
	publishYear: number;
	pagesCount?: number;
	rating: number;
	reviews: ReviewDTO[];
	note: string;
}

export interface ReviewDTO {
	author: string;
	date: string;
	text: string;
}

@Injectable()
export class BookLibraryService {

	constructor(private api: ApiClientService) { }

	getBookList(): Observable<Book[]> {
		return this.api.Get('books')
			.pipe(map((res: BookDTO[]) => {
				return res.map(book => new Book(book));
			}));
	}

	getBook(id: number): Observable<Book> {
		return this.api.Get('books/' + id)
			.pipe(map((res: BookDTO) => {
				return new Book(res);
			}));
	}

	addBook(data: any): Observable<Book> {
		return this.api.Post('books', data)
			.pipe(map((res: BookDTO) => {
				return new Book(res);
			}));
	}

	updateBook(data: Book): Observable<Book> {
		return this.api.Put('books/' + data.id, data)
			.pipe(map((res: BookDTO) => {
				return new Book(res);
			}));
	}

	deleteBook(data: Book): Observable<Object> {
		return this.api.Delete('books/' + data.id);
	}
}
