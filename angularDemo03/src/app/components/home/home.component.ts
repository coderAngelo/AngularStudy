import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public flag: any = true;
  public headerMsg: any = 'home组件的头部';

  // 获取 dom 节点
  @ViewChild('myBox') myBox: any;

  // 获取子组件

  @ViewChild('myNews') myNews: any;


  constructor() {
  }

  ngOnInit(): void {  // 组件和指令初始化完成，并不是真正的加载完成
    // 可以获取到 dom 节点
    const oBox: any = document.getElementById('box');
    // console.log(oBox);
    oBox.style.color = 'red';

    // 获取不到 dom 节点
    // let oBox1: any = document.getElementById('box1');
    // console.log(oBox1);
    // oBox1.style.color = 'red';
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): void { // 生命周期函数：页面加载完成
    // 原生js 操作dom
    const oBox1: any = document.getElementById('box1');
    // console.log(oBox1);
    oBox1.style.color = 'blue';

    // 使用@ViewChild 操作dom
    console.log(this.myBox.nativeElement);
    this.myBox.nativeElement.style.color = 'orange';

  }

  // 使用@ViewChild 操作子组件的方法
  // tslint:disable-next-line:typedef
  getNewsRun() {
    this.myNews.newsRun();
  }

  run(): void {
    alert('我是home组件的run方法');
  }

  getFooterOuter(e: any): void {
    console.log(e);
  }
}
