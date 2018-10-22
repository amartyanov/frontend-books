import { Component, OnInit } from '@angular/core';
import { BookLibraryService } from '../book-library.service';
import { Router } from '@angular/router';
import { Book } from '../models/Book';

@Component({
	selector: 'fb-book-add',
	templateUrl: './book-add.component.html',
	styleUrls: ['./book-add.component.less']
})
export class BookAddComponent implements OnInit {

	constructor(private bookService: BookLibraryService,
		private router: Router	
	) { }

	ngOnInit() {}

	createBook(formValues) {		
		this.bookService.addBook(formValues)
			.subscribe(
				(res: Book) => {
					this.router.navigate(['/book-list/' + res.id]);
				},
				(err) => {
					console.log('Error:' + err.text);
				}
			);
	}
}
