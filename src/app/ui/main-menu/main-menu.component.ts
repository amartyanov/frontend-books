import { Component, OnInit, Input } from '@angular/core';
import { MainMenuItem } from 'src/app/shared/menu/menu-items';

@Component({
	selector: 'fb-main-menu',
	templateUrl: './main-menu.component.html',
	styleUrls: ['./main-menu.component.less']
})
export class MainMenuComponent implements OnInit {

	@Input() menuLinks: MainMenuItem[];

	constructor() { }

	ngOnInit() {
	}

}
