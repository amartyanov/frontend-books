import { ReviewDTO } from '../book-library.service';

export class Review {

	author: string;
	date: Date;
	text: string;

	constructor(data: ReviewDTO = null) {
		data && this.deserialize(data);
	}

	deserialize(data: ReviewDTO) {
		this.author = data.author;
		this.date = new Date(data.date);
		this.text = data.text;
	}
}
