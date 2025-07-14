//below are type for simple variables

const age: number = 24;

// can i apply properties & methods of string datatype to above variable 

const firstName: string ="arief";

const completed:boolean = true;


//below are tyep for pre-defined objects
const now:Date = new Date();
//we can only apply the properties & methods of a certain dataType
// to the variables of same data type 

// below are type for object literal

const plot: {x:number; y:number}={
    x:12,
    y:23
}



const person = {
    name:"tej"
}


// using constructor Function
const person1 = new Object({name:"tej"})

// below are type for arrays
const colors: string[] =["red","black","white"];
const ages :number[] =[12,3,4,5];
const isDone: boolean[]=[true,false]


//below are type for class 
class Color{

}
const colorRed:Color = new Color(); // creating an instance 

const jsonData ='{"x":12,"y":24}'

const data:{x:number;y:number} = JSON.parse(jsonData);
console.log(data);

// example 2
let foundColor:boolean; // declaration 
const color = ["red","green","blue"];
for(let i=0; i<color.length; i++){
    if(color[i]=="green"){
        foundColor=true; //initialization 
    }
}


let foundColor1: string | boolean;
//example 3 
for(let i=0; i<color.length; i++){
    if(color[i]=="green"){
        foundColor1=true; //initialization 
    }else if(color[i]=="blue"){
        foundColor1="blue";
    }
}

