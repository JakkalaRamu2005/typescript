const person: {x:number; y:string}={
    x:12,
    y:"hello"
}

const details:{
    Name:string,
    age: number,
    coords:{
        lan:number,
        lng:number
    },
    setAge(age:number)=> void
}={
    name:"deepak",
    age:18,
    coords:{
        lan:20,
        lng:23
    },
    setAge:function(age:number):void{
        this.age = age
        console.log(`Users Current Age is ${this.age}`)
    }


}



const {age,Name}:{age:number,Name:string} = details
const {coords:{lan,lng}}:{coords:{lan:number,lng:number}}=details;
console.log(lan,lng);