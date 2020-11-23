import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProductComponent} from './product.component';
import {PlistComponent} from './plist/plist.component';
import {PnameComponent} from './pname/pname.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: 'plist',
        component: PlistComponent
      },
      {
        path: 'pname',
        component: PnameComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
