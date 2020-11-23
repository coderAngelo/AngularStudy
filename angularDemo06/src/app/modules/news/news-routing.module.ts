import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NewsComponent} from './news.component';
import {NewContentComponent} from './new-content/new-content.component';


const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    // children: [
    //
    // ]
  },
  {
    path: 'newContent',
    component: NewContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {
}
