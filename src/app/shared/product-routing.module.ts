import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from '../products/product-list.component';
import { ProductGuardService } from '../products/product-guard.service';
import { ProductDetailComponent } from '../products/product-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild
    ([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',
      canActivate: [ProductGuardService],
      component: ProductDetailComponent},
      { path: 'products/:id', component: ProductListComponent},
    ]),
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
