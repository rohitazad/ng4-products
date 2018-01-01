import { Component, OnInit } from '@angular/core';

import { IProduct } from './../product';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  public pageTitle:string = 'Products list ';
  public rohit:string = '';
  public imageWidth:number = 80;
  public imageHeight:number = 140; 
  displayImage:boolean = false;
  errorMessage:string;
  productList;

  _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.productList;
    }
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.productList.filter((product: IProduct) =>
              product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    filteredProducts: IProduct[];

  
  constructor(public _productSer:ProductService) { }

  displayImgToogle():void{
    this.displayImage = !this.displayImage;
  }

     onRatingClicked(message: string): void {
        console.log(this.pageTitle = 'Product List: ' + message)
    }

  ngOnInit():void {
      //console.log('on init start here');
      this._productSer.getProductsList()
        .subscribe(data =>{
            //console.log(data);
              this.productList = data;
              this.filteredProducts = this.productList;
        }, error => this.errorMessage = <any>error);
  }

}
