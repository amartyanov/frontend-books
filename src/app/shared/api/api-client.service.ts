import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IRequestOptions {
	headers?: HttpHeaders;
	observe?: 'body';
	params?: HttpParams;
	reportProgress?: boolean;
	responseType?: 'json';
	withCredentials?: boolean;
	body?: any;
}

export function applicationHttpClientCreator(httpHandler: HttpHandler) {
	return new ApiClientService(httpHandler);
}

@Injectable()
export class ApiClientService extends HttpClient {

	private api = 'http://localhost:3000/';

	public Get<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
		return this.get<T>(this.api + endPoint, options);
	}

	public Post<T>(endPoint: string, params: Object, options?: IRequestOptions): Observable<T> {
		return this.post<T>(this.api + endPoint, params, options);
	}

	public Put<T>(endPoint: string, params: Object, options?: IRequestOptions): Observable<T> {
		return this.put<T>(this.api + endPoint, params, options);
	}
	
	public Delete<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
		return this.delete<T>(this.api + endPoint, options);
	}
}
