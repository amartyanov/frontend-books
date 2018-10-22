import { Routes, RouterModule } from '@angular/router';

import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookAddComponent } from './book-add/book-add.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const routes: Routes = [
	{
		path: 'book-list',
		component: BookListComponent,
	},
	{
		path: 'book-list/:id',
		component: BookDetailsComponent
	},
	{
		path: 'book-add',
		component: BookAddComponent,
	},
	{
		path: '',
		redirectTo: 'book-list',
		pathMatch: 'full'
	},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
