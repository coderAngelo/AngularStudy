import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  // 增加
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // 读取
  get(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  // 删除
  remove(key: string) {
    localStorage.removeItem(key);
  }
}

