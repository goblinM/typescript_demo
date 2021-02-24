class Person{
    public name:string;  // public、private、static 是 typescript 中的类访问修饰符
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    tell(){
        console.log(this.name + this.age);
    }
}

class Student extends Person{
    gender:string;
    constructor(gender:string){
        super("muyy",23);
        this.gender = gender;
    }
    tell(){
        console.log(this.name + this.age + this.gender);
    }
}

var student = new Student("male");
student.tell();  // muyy23male

class Hello{
    private _name: string;
    private _age: number;
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
    get age(): number{
        return this._age;
    }
    set age(age: number) {
        if(age>0 && age<100){
            console.log("年龄在0-100之间"); // 年龄在0-100之间
            return;
        }
        this._age = age;
    }
}

let hello = new Hello();
hello.name = "muyy";
hello.age = 23
console.log(hello.name); // muyy
