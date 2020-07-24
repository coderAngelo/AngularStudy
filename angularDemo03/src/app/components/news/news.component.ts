import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  newsRun(){
    console.log('我是 news 组件的 run 方法');
  }

}
