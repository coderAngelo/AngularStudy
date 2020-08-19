import {Component, OnInit} from '@angular/core';
// 引入服务
import {RequestService} from '../../services/request.service';
// 引入工具
import {map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public request: RequestService) { // 声明服务
  }

  ngOnInit(): void {
    // 1. 同步方法获取数据
    const data = this.request.getData();
    console.log('1.' + data);

    // 2. 回调函数获取异步数据
    this.request.getCallbackData((data) => {
      console.log('2.' + data);
    });

    // 3. Promise 获取异步数据
    const promiseData = this.request.getPromiseData();
    promiseData.then((data) => {
      console.log('3.' + data);
    });

    // 4. Rxjs 获取异步数据
    const rxjsData = this.request.getRxjsData();
    rxjsData.subscribe((data) => {
      console.log('4.' + data);
    });

    // 5. 过一秒后撤回请求
    const streem = this.request.getRxjsData();
    const d = streem.subscribe((data) => {
      console.log('5.' + data);
    });
    setTimeout(() => {
      d.unsubscribe();  // 取消订阅
    }, 1000);

    // 6. 执行多次
    // let streemInterval = this.request.getRxjsIntervalData();
    // streemInterval.subscribe((data) => {
    //   console.log(data);
    // });

    // 7. 用工具方法对返回的数据进行处理

    // const streemNum = this.request.getRxjsIntervalNum();
    // streemNum.pipe(
    //   filter((value) => { // filter 数据筛选
    //     if (value % 2 == 0) {
    //       return true;
    //     }
    //   })
    // ).subscribe((data) => {
    //   console.log(data);
    // });

    // const streemNum = this.request.getRxjsIntervalNum();
    // streemNum.pipe(
    //   map((value) => { // map 数据计算
    //     return value * value;
    //   })
    // ).subscribe((data) => {
    //   console.log(data);
    // });

    // const streemNum = this.request.getRxjsIntervalNum();
    // streemNum.pipe(
    //   filter((value) => {
    //     if (value % 2 == 0) {
    //       return true;
    //     }
    //   }),
    //   map((value) => {
    //     return value * value;
    //   })
    // ).subscribe((data) => {
    //   console.log(data);
    // });
  }
}
