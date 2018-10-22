import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { BookLibraryService } from '../book-library.service';

@Component({
	selector: 'fb-book-list',
	templateUrl: './book-list.component.html',
	styleUrls: ['./book-list.component.less']
})
export class BookListComponent implements OnInit {

	bookList: Book[] = [];
	isLoading: boolean = true;

	constructor(private bookService: BookLibraryService) { }

	ngOnInit() {
		this.getList();
	}

	getList() {
		this.bookService.getBookList()
			.subscribe((res: Book[]) => {
				this.bookList = res;
				this.isLoading = false;
			});
	}
}
