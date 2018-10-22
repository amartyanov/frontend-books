import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { Book } from '../models/Book';

@Component({
	selector: 'fb-book-form',
	templateUrl: './book-form.component.html',
	styleUrls: ['./book-form.component.less']
})
export class BookFormComponent implements OnInit {

	bookForm: FormGroup;
	authorFormArray: FormArray;

	@Input() book?: Book = null;
	@Input() readonly?: boolean = false;
	@Output() setReadonly: EventEmitter<boolean> = new EventEmitter();
	@Output() bookFormSaved: EventEmitter<any> = new EventEmitter();

	constructor(
		private fb: FormBuilder
	) { }

	ngOnInit() {
		this.initForm();
	}

	initForm() {
		this.bookForm = this.fb.group({
			name: ['', Validators.required],
			description: ['', Validators.required],
			publisher: ['', Validators.required],
			isbn: ['', Validators.required],
			publishYear: ['', Validators.required],
			rating: [0, [Validators.min(0), Validators.max(10)]],
			author: this.fb.array(this.initAuthorArray()),
			pagesCount: [''],
			cover: [''],
			note: ['']
		});

		this.authorFormArray = <FormArray>this.bookForm.get('author');

		if (this.book) {
			this.bookForm.setValue(this.book.valuesToForm());
		}
	}

	initAuthorArray() {
		if (this.book) {
			const array = this.book.author.map(() => this.fb.control('', Validators.required));
			return array;
		}
		return [this.fb.control('', Validators.required)];
	}

	addAuthor() {
		this.authorFormArray.push(this.fb.control('', Validators.required));
	}

	deleteAuthor(index: number) {
		this.authorFormArray.removeAt(index);
	}

	setReadonlyMode(val: boolean) {
		this.setReadonly.emit(val);

		if (val && this.book) {
			this.bookForm.setValue(this.book.valuesToForm());
		}
	}

	formSubmit() {
		this.bookFormSaved.emit(this.bookForm.value);
	}
}
