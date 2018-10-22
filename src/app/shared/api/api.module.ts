import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpHandler } from '@angular/common/http';
import { ApiClientService, applicationHttpClientCreator } from './api-client.service';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule
	],
	exports: [
		HttpClientModule
	],
	declarations: [],
	providers: [
		{
			provide: ApiClientService,
			useFactory: applicationHttpClientCreator,
			deps: [HttpHandler]
		}
	]
})
export class ApiModule { }
