//3 通过require导入模块
//var arr=require('./app');
//8.1 es6导入

import { arr } from './app'

//11.0测试es6
import { mayun } from "./person" 

//5 引入css
require('../css/main.css');
require('../css/test.scss');
var students=require('./student');
//4 、使用模块
console.log(arr[1]);

console.log(students.speak());

//9.1
students.getData();

//11.1 测试es6

mayun.said();

// 测试操作DOM
import './aboutdom'