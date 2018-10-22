import { Component } from '@angular/core';
import { menuItems, MainMenuItem } from './shared/menu/menu-items';

@Component({
	selector: 'fb-app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent {

	menuItems: MainMenuItem[] = menuItems;
	
	constructor() {
		
	}
}
