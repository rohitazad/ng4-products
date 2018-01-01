import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductService } from './product.service';
import { StartRatingComponent } from './share/start-rating/start-rating.component';
import { ConvertToSpacePipe } from './share/convert-to-space.pipe';
import { ProductGuardService } from './product-guard.service';



@NgModule({
    imports: [
      RouterModule.forChild([
          { path: 'products', component: ProductlistComponent },
          { path: 'products/:id', 
          canActivate: [ ProductGuardService ],
          component: ProductdetailsComponent }
      ]),
      FormsModule,
      CommonModule,
      HttpClientModule
    ],
    declarations: [ 
        ProductlistComponent,
        ProductdetailsComponent,
        StartRatingComponent,
        ConvertToSpacePipe
    ],
    providers: [
        ProductService,
        ProductGuardService
    ]
  })
  export class ProductModule { }