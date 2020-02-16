"use strict";
// 泛型 传入和返回一致
// function fun<T>(val:T):T{
//   return val
// }
// console.log(fun<string>("23"))
// class Min<T>{
//   list:T[] = []
//   add(val:T):void{}
//   min(val:T):T{return val}
// }
// interface config<T>{
//   (v1: T,v2: T):T
// }
// let c2:config<string> = function <T>(name: T,age:T):T{
//   return name
// }
// interface Idbi<T>{
//   add(info:T):boolean
//   update(info:T, id: number):boolean
//   get(id:number): any[]
//   dele(id:number): boolean
// }
// class mysql<T> implements Idbi<T>{
//   add(info:T):boolean{
//     throw new Error("123")
//   }
//   update(info:T):boolean{
//     throw new Error("123")
//   }
//   get(id:number):any[]{
//     throw new Error("123")
//   }
//   dele(id:number):boolean{
//     throw new Error("123")
//   }
// }
var obj = {
    a: 1,
    b: 'string',
    c: null
};
obj.c = null;
