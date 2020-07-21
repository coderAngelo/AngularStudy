import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// 引入双向数据绑定模块
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {FromsComponent} from './components/froms/froms.component';
import { TodolistComponent } from './components/todolist/todolist.component';

@NgModule({
  declarations: [
    AppComponent,
    FromsComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
