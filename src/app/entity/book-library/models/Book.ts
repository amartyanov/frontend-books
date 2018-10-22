import { BookDTO } from '../book-library.service';
import { Review } from './Review';

export class Book {

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
	reviews: Review[] = [];
	note: string;

	constructor(data: BookDTO = null) {
		data && this.deserialize(data);
	}

	deserialize(data: BookDTO) {
		this.id = data.id;
		this.name = data.name;
		this.description = data.description;
		this.author = data.author;
		this.publisher = data.publisher;
		this.isbn = data.isbn;
		this.publishYear = data.publishYear;
		this.rating = data.rating;

		if (data.reviews && data.reviews.length) this.reviews = data.reviews.map(review => new Review(review));
		if (data.pagesCount) this.pagesCount = data.pagesCount;
		if (data.cover) this.cover = data.cover;
		if (data.note) this.note = data.note;
	}

	valuesToForm() {
		return {
			name: this.name,
			description: this.description,
			author: this.author,
			publisher: this.publisher,
			isbn: this.isbn,
			publishYear: this.publishYear,
			rating: this.rating,
			pagesCount: this.pagesCount || null,
			cover: this.cover || null,
			note: this.note || ''
		};
	}

	get ratingArray() {
		const array = [];
		array.length = this.rating;

		return array;
	}
} 
