import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';  // get post 请求模块

// 引入服务
import {HtmlServeService} from '../../services/html-serve.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(
    public http: HttpClient, // 声明模块；
    public httpServe: HtmlServeService  // 声明服务
  ) {
  }

  ngOnInit(): void {
  }

  // get请求
  getData() {
    // 服务器必须允许跨域
    let api = 'http://a.itying.com/api/productlist';
    this.http.get(api).subscribe(data => {
      console.log(data);
    });
  }

  // post请求
  postData() {
    // 手动设置请求的类型（必须）
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    // 存在跨域问题
    let api = 'http://127.0.0.1:3000/dologin';
    this.http.post(api, {'username': '张三', 'age': 20}, httpOptions).subscribe((data) => {
      console.log(data);
    });
  }

  // jsonp 请求
  jsonpData() { // jsonp请求服务器必须得支持 jsonp

    /** 测试接口是否支持 jsonp
     * http://a.itying.com/api/productlist?callback=xxx
     * http://a.itying.com/api/productlist?cb=xxx
     */

    let api = 'http://a.itying.com/api/productlist';
    this.http.jsonp(api, 'callback').subscribe((data) => {
      console.log(data);
    });
  }

  // axios 请求
  axiosGet() {
    let api = 'http://a.itying.com/api/productlist';
    this.httpServe.axiosGet(api).subscribe(data => {
      console.log(data);
    });

  }

}
