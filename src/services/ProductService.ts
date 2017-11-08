import { Constants } from './../constants/Constants';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

    constructor(private http: Http) {

    }

    // return this.http.post('findItems', paramString, { headers: formHeader })
    // .catch(error => this.processError(error));

    /**
     * Gets products from service
     */
    getProducts(): Observable<Response> {
        const formHeader = new Headers({ 'Access-Control-Allow-Origin': '*' });
        return this.http.get(Constants.PRODUCTS_URL);
    }

    /**
     * searches for product.
     */
    searchProducts(searchText: string) {
        return this.http.get(Constants.PRODUCTS_URL);
    }

}