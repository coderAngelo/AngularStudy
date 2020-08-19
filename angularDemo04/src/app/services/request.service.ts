import {Injectable} from '@angular/core';

// 组件
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() {
  }

  // 同步数据
  getData() {
    return '这是同步数据';
  }

  // 回调函数数据 --- 异步
  getCallbackData(cb) {
    setTimeout(() => {
      const username = '张三 --- 回调函数';
      cb(username);
    }, 1000);
  }

  // promise 数据 --- 异步
  getPromiseData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const username = '张三 --- Promise';
        resolve(username);  // 成功
        reject('请求失败');  // 失败
      }, 1000);
    });
  }

  // Rxjs 数据 --- 异步
  getRxjsData() {
    return new Observable<any>((observer) => {
      setTimeout(() => {
        const username = '张三 --- Rxjs';
        observer.next(username);
        // observer.error('请求失败');  // 失败
      }, 2000);
    });
  }

  // 多次执行
  getRxjsIntervalData() {
    let count = 0;
    return new Observable<any>((observe) => {
      setInterval(() => {
        count++;
        let username = '张三 --- rxjs-interval=' + count;
        observe.next(username);
      }, 1000);
    });
  }

  // 用工具方法进行数据处理
  getRxjsIntervalNum() {
    let count = 0;
    return new Observable<any>((observe) => {
      setInterval(() => {
        count++;
        observe.next(count);
        // observe.error('请求失败');
      }, 1000);
    });
  }
}
