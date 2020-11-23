import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./modules/news/news.module').then((m) => m.NewsModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./modules/product/product.module').then((m) => m.ProductModule)
  },

  {
    path: 'product',
    loadChildren: () => import('./modules/product/product.module').then((m) => m.ProductModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
