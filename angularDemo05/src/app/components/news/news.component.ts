import {Component, OnInit} from '@angular/core';

// 引入路由模块
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  list = [];

  constructor(
    public router: Router,
    public aRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    for (let i = 1; i <= 10; i++) {
      this.list.push(`这是地${i}条数据`);
    }

    this.aRoute.queryParams.subscribe((data) => {
      console.log(data);
    });
  }

  goHome(): void {
    this.router.navigate(['home']);
  }

  goNewContent(): void {  // 动态路由
    this.router.navigate(['/newContent', '123']);
  }

  goNews(): void {  // get 传值
    const params = {
      queryParams: {
        aid: 1234,
      }
    };
    this.router.navigate(['news'], params);
  }
}
