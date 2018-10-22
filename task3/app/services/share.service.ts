import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  // 数据共享：声明data在其他组件中使用
  data: Array<any> = [1, 2, 3];
  add(msg) {
    this.data.push(msg);
  }
  constructor() { }
}
