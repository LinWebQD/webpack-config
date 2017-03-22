/**
 * Created by wangjianfei on 2017/3/17.
 */

function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.said=function(){
    console.log("我是"+this.name+" ,"+this.age+"岁！");
}


//11 测试es6,(没法编译会报错)
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     said(){
//         console.log("我是"+this.nams+" ,"+this.age+"岁！");
//     }
// }



// let mayun=new Person("马云","50");
var mayun=new Person("马云","50");

export { mayun }
