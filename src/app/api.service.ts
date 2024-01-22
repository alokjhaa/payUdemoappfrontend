import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    configUrl = 'http://localhost:8282/';

    constructor(
        private http: HttpClient
    ) { }

    payUBuy() {
        return this.http.get<any>(`${this.configUrl}payu-payment`);
    }

}