import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ShoppingService {
    constructor(private http: HttpClient) {}

    getProducts() {
        return this.http.get('../../../assets/config/api.json');
    }
}