import {Component, OnInit} from '@angular/core';

// 引入服务
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  // 搜索功能
  public keyword: string;
  public historyList: any[] = [];

  // todolist
  public keywordTodo: string;
  public todolist: any[] = [];

  // 声明服务
  constructor(public storage: StorageService) {

  }

  // 初始化函数
  ngOnInit(): void {
    var todolist: any = this.storage.get('todolist');
    if (todolist) {
      this.todolist = todolist;
    }
  }

  // 搜索功能
  doSearch() {
    if (this.historyList.indexOf(this.keyword) === -1) {
      this.historyList.push(this.keyword);
    }
    this.keyword = '';
  }

  deleteHistory(key) {
    // alert(key);
    this.historyList.splice(key, 1);
  }

  // todolist
  doAdd(e) {
    if (e.keyCode == 13) {
      if (!this.todolistHasKeywordtodo(this.todolist, this.keywordTodo)) {
        this.todolist.push({
          title: this.keywordTodo,
          status: 0,  // 0 待办；1 已完成
        });
        this.keywordTodo = '';
        this.storage.set('todolist', this.todolist);
      } else {
        alert('数据已存在');
        this.keywordTodo = '';
      }
    }
  }

  // 确认todolist里面是否包含keywordTodo 存在：true 不存在：false
  todolistHasKeywordtodo(todolist: any, keywordtodo: any) {
    if (!keywordtodo) {
      return false;
    }
    for (let i = 0; i < todolist.length; i++) {
      if (todolist[i].title == this.keyword) {
        return true;
      }
    }
    return false;
  }

  deleteData(e) {
    this.todolist.splice(e, 1);
    this.storage.set('todolist', this.todolist);
  }

  checkboxChange() {
    this.storage.set('todolist', this.todolist);
  }
}
