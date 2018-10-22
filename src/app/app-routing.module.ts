import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { P404Component } from './ui/p404/p404.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'book-list',
		pathMatch: 'full'
	},
	{
		path: '**',
		component: P404Component,
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
