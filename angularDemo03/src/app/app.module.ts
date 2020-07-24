import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {CommonModule} from "@angular/common";
import { NewsComponent } from './components/news/news.component';
import { TransitionComponent } from './components/transition/transition.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentsComponent } from './components/contents/contents.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    TransitionComponent,
    HeaderComponent,
    FooterComponent,
    ContentsComponent,
    LifecycleComponent
  ],
    imports: [
        BrowserModule,
        CommonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
