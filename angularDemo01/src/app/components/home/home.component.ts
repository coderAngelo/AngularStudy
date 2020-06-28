import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // 图片路径
  public picUrl = 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png';

  // 循环数据
  public list: any[] = [
    {
      title: '我是第一个新闻',
      content: '111111'
    },
    {
      title: '我是第二个新闻',
      content: '222222'
    },
    {
      title: '我是第三个新闻',
      content: '33333'
    },
  ];

  // ngIf 判断
  public flag = true;   // true 显示选中； false 显示未选中

  // ngSwitch 循环
  public orderStatus = '2';   // '1'表示已经支付; '2'表示确认订单; '3'表示已经发货; '4'表示已经收货; 其他表示无效订单

  // ngStyle 样式
  public attr = 'orange';

  // 管道
  public today = new Date();

  // 事件
  public title = '我是一个title';

  public keywords = 'default';   // 默认

  constructor() {
  }

  ngOnInit(): void {
  }

  // 执行事件
  run() {
    alert('这是一个run方法');
  }

  // 执行方法获取数据
  getData() {
    alert(this.title);
  }

  // 执行方法改变属性的数据
  setData() {
    this.title = '我是改变后的title';
  }


  // 执行方法获取事件对象
  runEvent(event) {
    let dom: any = event.target;   // ionic 必须这样写
    dom.style.color = 'red';
  }

  // 表单，keydown事件
  keyDown(e) {
    if (e.keyCode == 13) {
      console.log('按了下回车');
    } else {
      console.log(e.target.value);
    }
  }

  keyUp(e) {
    if (e.keyCode == 13) {
      console.log("按了下回车");
      alert('内容为：' + e.target.value);
    }
  }

  // 改变双向数据绑定keywords方法
  changeKeywords() {
    this.keywords = '我是改变之后的keywords';
  }

  // 获取双向数据帮的keywords方法
  getKeywords(){
    alert(this.keywords);
  }
}
