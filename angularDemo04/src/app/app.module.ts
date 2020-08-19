import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';  // get post 请求组件

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';

import {RequestService} from './services/request.service';
import {NewsComponent} from './components/news/news.component';
import {HtmlServeService} from './services/html-serve.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [RequestService, HtmlServeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
