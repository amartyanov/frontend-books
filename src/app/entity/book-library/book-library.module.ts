import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing } from './book-library.routing';
import { UiModule } from 'src/app/ui/ui.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookReviewsComponent } from './book-reviews/book-reviews.component';
import { BookLibraryService } from './book-library.service';

@NgModule({
	imports: [
		routing,
		CommonModule,
		UiModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [
		BookListComponent, 
		BookDetailsComponent, 
		BookAddComponent, 
		BookFormComponent,
		BookReviewsComponent
	],
	providers: [
		BookLibraryService
	]
})
export class BookLibraryModule { }
