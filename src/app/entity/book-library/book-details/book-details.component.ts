import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { BookLibraryService } from '../book-library.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'fb-book-details',
	templateUrl: './book-details.component.html',
	styleUrls: ['./book-details.component.less']
})
export class BookDetailsComponent implements OnInit {

	book: Book;
	readonly: boolean = true;
	isLoading: boolean = true;

	constructor(
		private route: ActivatedRoute,
		private bookService: BookLibraryService,
		private router: Router
	) { }

	ngOnInit() {
		this.getBook();
	}

	getBook() {
		const id = +this.route.snapshot.paramMap.get('id');

		this.bookService.getBook(id)
			.subscribe(
				(res: Book) => {
					this.book = res;
					this.isLoading = false;
				},
				(err) => {
					this.router.navigate(['/p404']);
					console.log('Error:' + err.text);
				}
			);
			
	}

	updateBook(formValues) {
		const data = {...this.book, ...formValues};

		this.bookService.updateBook(data)
			.subscribe(
				(res: Book) => {
					this.book = res;
					this.setReadonly(true);
				},
				(err) => {
					console.log('Error:' + err.text);
				}
			);
	}

	setReadonly(val) {
		this.readonly = val;
	}
}
