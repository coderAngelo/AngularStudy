import {Component, OnInit} from '@angular/core';    // 引入核心

@Component({
  selector: 'app-header',   // 使用这个组件的名称
  templateUrl: './header.component.html',   // html 模板
  styleUrls: ['./header.component.scss']    // css 样式
})
export class HeaderComponent implements OnInit {    // 实现接口

  /*
    声明变量的方式：
      1. public       共有的 *（默认） 可以在这个类中使用，也可以在类外面使用；
      2. protected    受保护的        只有在当前类及子类使用；
      3. private      私有           只有在当前类可以使用；
   */

  public title = '我是头部组件';

  msg = '我是一个头部组件的msg';

  // private userName = '张三';

  public student: any = '我是一个学生属性（数据）';   // 推荐

  public userInfo: any = {
    username: '张三',
    age: '20'
  };

  public message: any;

  public content = '<h4>我是一个 html 标签</h4>>';

  // 定义数组
  public arr = ['111', '222', '333'];

  public list: any[] = ['我是第一个新闻', 22222, '我是第三个新闻'];

  public items: Array<string> = ['我是one', '我是two', '我是three'];
  // 定义数组对象
  public userList: any[] = [
    {
      userName: '张三',
      age: 20
    },
    {
      userName: '李四',
      age: 21
    },
    {
      userName: '王五',
      age: 22
    },
  ];

  public cars: any[] = [
    {
      cate: '宝马',
      list: [
        {
          title: '宝马x1',
          price: '30w'
        },
        {
          title: '宝马x2',
          price: '40w'
        },
        {
          title: '宝马x3',
          price: '50w'
        },
      ]
    },
    {
      cate: '宝马',
      list: [
        {
          title: '奥迪q1',
          price: '10w'
        },
        {
          title: '奥迪q2',
          price: '20w'
        },
        {
          title: '奥迪q3',
          price: '30w'
        },
      ]
    }
  ];

  constructor() {   // 构造函数

    this.message = '给这个属性赋值 ===（改变属性的值）';

    console.log(this.msg);

    // 改变属性的值
    this.msg = '这是一个改变后的msg';
  }

  ngOnInit(): void {    // 初始化生命周期函数
  }

}
