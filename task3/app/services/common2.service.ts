import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { LogService } from './log.service';
// 创建服务自动出现Injectable注入器将服务注入root中，指明当前服务 Common2Service可以不可以注入其他服务
@Injectable({
  providedIn: 'root'
})
export class Common2Service implements CommonService {// 实现CommonService接口,要将接口的方法写入其中
  // Common2Service服务中注入LogService服务，若使用，上面的Injectable不可省，表示当前服务 Common2Service可以不可以注入其他服务
  constructor(private log: LogService) { }
  set(key, value) {
    this.log.log('set方法调用了');
    localStorage.setItem(key, value);
  }
  get(key) {
    this.log.log('get方法调用了');
    return localStorage.getItem(key);
  }

}
