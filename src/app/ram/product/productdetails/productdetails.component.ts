import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product';



import { ProductService } from '../product.service';
//import { error } from 'selenium-webdriver';
 
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {



  pageTitle: string = 'Product Detail';
  product: IProduct;
  imgWidth:number = 200;
  imgHeight:number = 350;
  errorMessage:string;
  errorStatus:number;
  error404:boolean = false;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
            private _productSer:ProductService) { }



  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;

    // here call to service data _productSer
     this._productSer.getProductDetail(`${id}`).subscribe( 
       data => {
         //console.log(data);
        this.product = data[0];
       }, error => {
          this.errorMessage =error;
          //console.log(this.errorMessage);
          this.errorStatus = error.status;
          if(this.errorStatus == 404){
            //alert('Product id is wrong we redirect to products pages');
           // this.openModal('kumer');
           this.error404 = true;
            //this._router.navigate(['/products']);
          }

       });
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
