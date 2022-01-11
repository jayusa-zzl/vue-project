var number1=1;
let number2=2;
const number3=3;
function doSomething(){
    //  用var声明变量后，变量会在函数作用域中持续存在，不会运行完销毁
    for (let i = 0; i < 5 ;i++) {
        console.log(i);
    }
// console.log('finally',i);
}
// doSomething()








function add(n1:number,n2:number){
    return n1+n2
}

console.log(add(number1,number2));



let isTrue:boolean
// isTrue="true"


// 数组、元组
// 数组 ：存放各种任意类型的数据
let list1:number[]=[1,2,3,4,5]
// 泛型
let list2:Array<number>=[1,2,3,4]

// 基本类型不一样
let list4=[1,'add'] // stirng|| number
let list5:any[]=[1,'add',true] // any

//  固定类型 固定长度 元组一定要指定类型
let person:[number,string]=[1,'zzl']
person[0]='add'
person[1]='yjt'
person[2]='add'
//  元组bug：使用数组的push可以突破元组的界限，无限增加
person.push(3)

// 联合类型 此时person2是混合了string和number类型的数组
let person2=[1,'zzl']
person2[0]='ddd'
person2[1]=1
person2[2]=4



// 联合类型
let union:string | number
union=2
union='zz'
union=true // 报错，在类型外



let union2:number|string|boolean|string[]
union2=3
union2='11'
union2=true
union2=['1','2']
union2=null



function merge(n1:number|string,n2:number|string,resultType:'as-string'|'as-number'){
    if (resultType==='as-string') {
        return n1.toString()+n2.toString()
    }
    if (typeof n1==='string' || typeof n2==='string') {
        return +n1+(+n2)
    }
    else return n1+n2
}

let mergeNumber=merge(2,5,'as-number') // number类型
let mergeNumber2=merge(2,5,'as-string') // number类型
let mergeString=merge('hello','world','as-string')


//  字面量类型
let union3:0|1|2
union3=1


let literal:1|'2'|true|[1,2,3,4]
literal=1
literal=true
literal='2'