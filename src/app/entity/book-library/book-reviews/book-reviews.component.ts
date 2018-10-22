import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../models/Review';

@Component({
	selector: 'fb-book-reviews',
	templateUrl: './book-reviews.component.html',
	styleUrls: ['./book-reviews.component.less']
})
export class BookReviewsComponent implements OnInit {

	@Input() reviews: Review[] = [];

	constructor() { }

	ngOnInit() {}
}
