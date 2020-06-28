/*
  这个文件是angular的根模块，告诉angular如何组装应用；
 */
import {BrowserModule} from '@angular/platform-browser';    // BrowserModule 浏览器解析模块
import {NgModule} from '@angular/core';   // angular 核心模块
import {FormsModule} from '@angular/forms';   // 双向数据绑定模块


import {AppComponent} from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';   // 根组件

/*
  @NgModule 装饰器，接收一个元数据对象，告诉 angular 如何编译和启动应用
 */
@NgModule({
  declarations: [   // 配置当前项目运行的组件
    AppComponent, HeaderComponent, HomeComponent
  ],
  imports: [    // 配置当前项目运行的模块
    BrowserModule,
    FormsModule
  ],
  providers: [],    // 配置项目所需的服务
  bootstrap: [AppComponent]   // 指定项目主视图
})
export class AppModule {    // 输出模块，根模块不需要导出任何东西，因为其他组件不需要导入根模块
}
