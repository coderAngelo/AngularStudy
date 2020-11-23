import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { CommodityComponent } from './components/commodity/commodity.component';
import { CommoditycontentComponent } from './components/commoditycontent/commoditycontent.component';
import { ShopComponent } from './components/commodity/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    NewscontentComponent,
    CommodityComponent,
    CommoditycontentComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
