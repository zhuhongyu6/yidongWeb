import { Injectable } from '@angular/core';

// Injectable可注入的，修饰下面的CommonService，可不写，不写就需要在根模块(app.module.ts)中的provides中声明并引入，声明后就可以在所有模块中用
// @Injectable({
//   providedIn: 'root'
// })
// 层级注入器：应用级注入=>主组件=>子组件
export class CommonService {
// CommonService里面只能写方法属性，声明函数
  constructor() { }
  set(key, value) {
    localStorage.setItem(key, value);
  }
  get(key) {
    return localStorage.getItem(key);
  }
}
