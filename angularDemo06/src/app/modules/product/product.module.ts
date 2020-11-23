import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { PlistComponent } from './plist/plist.component';
import { PnameComponent } from './pname/pname.component';


@NgModule({
  declarations: [ProductComponent, PlistComponent, PnameComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
