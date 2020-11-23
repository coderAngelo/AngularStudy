import {Component, OnInit} from '@angular/core';

// 路由组件引入
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.scss']
})
export class NewscontentComponent implements OnInit {

  constructor(
    public route: ActivatedRoute, // 声明要加 public
  ) {
  }

  ngOnInit(): void {
    // 获取动态路由中的数据
    this.route.params.subscribe((data) => {
      console.log(data);
    });

    // 获取 get 传入的数据
    // this.route.queryParams.subscribe((data) => {
    //   console.log(data);
    // });
  }

}
