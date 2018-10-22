import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatListModule, MatGridListModule, MatInputModule, MatCardModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { P404Component } from './p404/p404.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		MainMenuComponent,
		P404Component
	],
	imports: [
		CommonModule,
		RouterModule,
		MatSidenavModule,
		MatListModule,
		MatGridListModule,
		MatInputModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		MatProgressSpinnerModule
	],
	exports: [
		MatSidenavModule,
		MainMenuComponent,
		MatListModule,
		MatGridListModule,
		MatInputModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		MatProgressSpinnerModule
	],
})
export class UiModule { }
