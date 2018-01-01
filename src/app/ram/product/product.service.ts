import { Injectable } from '@angular/core';


import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IProduct } from './product';

@Injectable()
export class ProductService {

  private _apiUrl:string = './../api/product.json';
  private _apiUrl_2:string = './../api/product';
  constructor(
    public _http:HttpClient) { }

  getProductsList(): Observable<IProduct> {
    //console.log(this._apiUrl);
    return this._http.get<IProduct> (this._apiUrl)
    .do(data => {
      //console.log('All Data : ' + JSON.stringify(data))
    })
    .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
  }

  getProductDetail(productId):Observable<IProduct>{
    console.log('call to product details page');
    return this._http.get<IProduct>(this._apiUrl_2+productId+'.json')
    .do(data => {
      //console.log(data);
    })
    .catch(this.handleError2);
  }

  private handleError2(err: HttpErrorResponse) {
    console.error(err.message);
    
    //alert('product id is wrong');
    
    return Observable.throw(err);
  }

  

}
