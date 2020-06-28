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