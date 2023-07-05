let variable = "Hi"

variable = "Hello"

// let twenty = 20
let twenty:Number = 20;

twenty = 12;

let testString: string

testString = "Hello"

let testBoolean: boolean;

testBoolean=false;


let testStringOrNumber : string | number;
testStringOrNumber = 12
testStringOrNumber = "Ok"
// testStringOrNumber = [123]

// Array
let names = ["dirie", "farah", "ali"]

// names.push(2)
names.push("Nore")

let numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.push(11)


let testingStringArray : string[]

testingStringArray = ['a', 'b', 'c', 'd']

let testingNumberArray : number[]

testingNumberArray = [1,2,3,4,5,6,7,8,9]

let testStringOrArray : (string | number)[]

testStringOrArray = ["hello", 123]
testStringOrArray = [123]


// Objects
let user = {
    username:"dirie",
    age:23,
    isAdmin:false,
}

// user.username = 111
user.username = "ali"
user.age = 22
user.isAdmin = true

let userObject : {
    username:string,
    age:number,
    isAdmin:boolean
}

userObject={
    username:"Farah",
    age:22,
    isAdmin:true
}


let userObject2 : {
    username:string,
    age:number,
    isAdmin:boolean,
    phone?:string
}

userObject2={
    username:"Farah",
    age:22,
    isAdmin:true,
    phone:"+252727622"
}


// Any
let testAny: any;
// let testAny;

testAny = 12;
testAny = 'hello';
testAny = true;
testAny = [true];
testAny = {}


let testAnyArray : any[]

testAnyArray = [ 1, "two", false , [] ]


// Functions
let sayHi =()=>{
    console.log("Hello, welcome")
}
// sayHi = "hello"

let funRerurnString = () :string=>{
    console.log("hi")
    return "dirie"
}

let multiple = (num: number) =>{
    return num * 3;
}
let multiple2 = (num: number): number =>{
    return num * 3;
}

let multiple3 = (num: number): void =>{
    // return num * 3;
    // do something no return
}

let sum = (num1 : number, num2 : number, another?:number)=>{
return num1 + num2;
}

sum(2,5)


let fun = (user:{username:string, age:number, phone?:string})=>{
    console.log(user.username)
}


// Type Aliases
type UserType = {
    username: string,
    age: number,
    phone?: string
}

let betterFun = (user:UserType)=>{
    console.log(user.phone)
}

type myFun = (a:number, b:string) => void

let write : myFun = (num, str) =>{
    console.log(num + " times" + str)
}

type UserType2 = {
    username:string,
    age:number,
    phone?:string,
    theme: "dark" | "light"
}

const userWithTheme : UserType2 = {
    username : "dirie",
    age: 23,
    theme : "dark"
    // theme : "red"
}


// Interfaces
interface IUser {
    username : string;
    email : string;
    age : number;
}

interface IEmplyee extends IUser {
    employeeId : number;
}

const emp : IEmplyee = {
    username : "dire",
    email : "dire@gmail.com",
    age:23,
    employeeId : 2
}

const client : IUser = {
    username : "dire",
    email : "dire@gmail.com",
    age:23
}


//Generics

interface IAuthor {
    id: number,
    username: string
}

interface ICategory {
    id: number,
    title: string
}

interface IPost {
    id:number;
    title:string;
    desc:string;
    extra : IAuthor[] | ICategory[];

}

interface IPostbetter<T> {
    id:number;
    title:string;
    desc: string;
    extra : T[]
}

const testMe : IPostbetter<string> = {
    id:1,
    title:"post title",
    desc: "post description",
    extra: ["description"]
}

interface IPostEvenBetter<T extends object>{
    id:number;
    title:string;
    desc: string;
    extra : T[]
}

const testMe2 : IPostbetter<IAuthor> = {
    id:1,
    title:"post title",
    desc: "post description",
    extra: [{id:1, username:"dirie"}]
}

const testMe3 : IPostbetter<ICategory> = {
    id:1,
    title:"post title",
    desc: "post description",
    extra: [{id:1, title:"post title"}]
}

