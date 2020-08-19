#Angular学习

- demo01：
    1. 安装angular环境 angular/cli nvm nrm
    2. 创建angular项目 ng new angularDemo01 --skip-install （不进行npm i）
    3. 运行angular项目 ng serve --open
    4. 分析项目结构（app.module.ts及component 请查看文件内容）
    5. 自定义组件 ng g component components/header
    ```项目结构
  
        e2e               端对端（end-to-end）测试
        node_modules      安装项目以来的npm第三方模块
        src               项目开发所有的文件存放
        -app              组件以及app.module.ts定义根模块
        -assets           静态资源
        -environments     目标环境准备文件
        -index.html       主页面
        -main.ts          应用入口
        -polyfills.ts     填充库
        -style.css        这是全局样式
        -test.ts          单元测试入口
  
    ``` 
    1. 数据绑定 /* 普通数据绑定；对象数据绑定 */
    2. 属性绑定 /* 普通属性绑定；动态属性绑定 */
    3. HTML标签绑定 /* 常规绑定；编译绑定 */
    4. 简单运算 /* 1+2={{1 + 2}} */
    5. 数据循环 / 添加索引  /* *ngFor / let key = index */
    6. 引入图片 /* 普通图片绑定；动态图片绑定 */
    7. 条件判断 /* *ngIf 和 *ngSwitch */
    8. 属性 /* [ngCladss] 和 [ngStyle] */
    9. 管道 /* | 详情官网查询 */
    10. 表单事件 /* (click) 详情官网查询 */
    11. 双向数据绑定 
    ```双向数据绑定
        1. 须在app.module.ts文件中引入FormsModule模块'import { FormsModule } from' 
        2. 使用方式'<input [(ngModel)]="inputValue">'*/
    ```


- demo02：
    1. 制作在线预约表单；
    2. 制作todolist，并且通过服务实现数据持久化
    ```服务
      1. 创建服务： ng g service services(服务文件夹)/storage（服务文件名）
      2. 在 app.module.ts 里面引入创建的服务 
        - import { StorageService } from './services/storage.service';
        - @NgModule({ 
            declarations: [ 
                AppComponent, 
                HeaderComponent, 
                FooterComponent, 
                NewsComponent, 
                TodolistComponent ],
            imports: [ 
                BrowserModule, 
                FormsModule ],
            providers: [StorageService], // 引用服务
            bootstrap: [AppComponent] 
          })
    ```
    3. 在使用页面中引入服务
    ```服务
        - import { StorageService } from '../../services/storage.service';
        - constructor(private storage: StorageService) { } // 声明服务
        - addData(){
            this.list.push(this.username); 
            this.storage.set('todolist',this.list); // 使用服务
          }
    ``` 
  
- demo03:
    1. dom操作：原生js 和 @ViewChild，须在ngAfterViewInit(){}函数中进行操作；
    2. 父子组件之间的信息通讯
    ```信息通讯
        一、 父组件传值给子组件
            1. 父组件在调用子组件时进行自定义属性 <app-header [msg]="msg"></app-header>
            2. 在子组件中引用input模块 import { Component, OnInit ,Input } from '@angular/core';
            3. 在子组件中接收 @Input() msg:string
  
        二、父组件获取子组件的数据和方法 @ViewChild
  
        三、@Output的使用
    ```
    3. 生命周期函数
    
- demo04:
    1. Promise 处理异步
    2. Rxjs 处理异步
    ```Rxjs
        // 获取数据
        import {Observable} from 'rxjs';
            let stream = new Observable(observer => {
                setTimeout(() => {
                    observer.next('observable timeout');
                }, 2000);
            }); 
        stream.subscribe(value => console.log(value))
    
  
        // unsubscribe 取消订阅
        let stream = new Observable(observer => {
            let timeout = setTimeout(() => {
                clearTimeout(timeout);
                observer.next('observable timeout');
            }, 2000);
        }); 
        let disposable = stream.subscribe(value => console.log(value));
        setTimeout(() => {
            //取消执行 
            disposable.unsubscribe(); 
        }, 1000);
  
  
        // Rxjs 订阅后多次执行
        let stream = new Observable<number>(observer => { 
            let count = 0; 
            setInterval(() => { 
                observer.next(count++); 
            }, 1000); 
        }); 
        stream.subscribe(value => console.log("Observable>"+value));
  
  
        // Rxjs 工具函数 map：数据运算；  filter：数据过滤；
  
        Rxjs中文手册：https://cn.rx.js.org/
    ```
    3. angular 数据交互
        1. angualr GET 请求
        ```get
            - 在app.module.ts中
              import {HttpClientModule} from '@angular/common/http';
              imports: [HttpClientModule]
            
            - 在使用的组件中
              import {HttpClient} from "@angular/common/http";
              constructor(public http:HttpClient) { }
            
            - 请求示例
              var api = "http://a.itying.com/api/productlist"; 
              this.http.get(api).subscribe(response => { 
                console.log(response); 
              });
        ```
  
        2. angular POST 提交
        ```post
            - app.module.ts依赖于get相同
            
            - 在使用的组件中
              import {HttpClient,HttpHeaders} from "@angular/common/http";
            
            - 上传示例
              const httpOptions = { 
                headers: new HttpHeaders({ 'Content-Type': 'application/json' }) 
              };
              var api = "http://127.0.0.1:3000/doLogin"; 
              this.http.post(api,{username:'张三',age:'20'},httpOptions).subscribe(response => { console.log(response); });
        ```
       
       3. angular JSONP 请求
       ```jsonp
            - 在app.module.ts中
              import {HttpClientModule,HttpClientJsonpModule} from '@angular/common/http';
              imports: [HttpClientModule, HttpClientJsonpModule ]
            
            - 在使用的组件中于get请求相同
       
            - 请求示例
              var api = "http://a.itying.com/api/productlist"; 
              this.http.jsonp(api,'callback').subscribe(response => { 
                console.log(response); 
              });
       ```
  
        4. 第三方请求模块 axios
        ```axios
            - 安装
              npm install axios --save
       
            - 在用的组件中引入
              import axios from 'axios';
       
            - 请求示例 参考文档
              axios.get('/user?ID=12345') 
              .then(function (response) { 
                // handle success 
                console.log(response); 
              })
              .catch(function (error) { 
                // handle error 
                console.log(error); 
              })
              .then(function () { 
                // always executed 
              });
        ```