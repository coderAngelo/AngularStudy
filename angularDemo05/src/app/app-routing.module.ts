import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// 组件引入
import {HomeComponent} from './components/home/home.component';
import {NewsComponent} from './components/news/news.component';
import {NewscontentComponent} from './components/newscontent/newscontent.component';
import {CommodityComponent} from './components/commodity/commodity.component';
import {CommoditycontentComponent} from './components/commoditycontent/commoditycontent.component';
import { ShopComponent } from './components/commodity/shop/shop.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'newContent/:aid',  // 动态路由
    component: NewscontentComponent
  },
  // {
  //   path: 'newContent',  // get 传值
  //   component: NewscontentComponent
  // },
  {
    path: 'Commodity',
    component: CommodityComponent,
    children: [
      {
        path: 'commodityContent',
        component: CommoditycontentComponent
      },
      {
        path: 'commodityShop',
        component: ShopComponent
      },
      {
        path: '**', // 匹配不到路由的时候加载的组件 或者跳转的路由
        redirectTo: 'commodityContent'
      }
    ]
  },
  {
    path: '**', // 匹配不到路由的时候加载的组件 或者跳转的路由
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
