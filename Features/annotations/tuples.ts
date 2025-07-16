// tuples in ts -> are same implementataion of arrays 
const coolDrink={
    carbonated: "yes",
    sugar: 40,
    colour: "yes"
}

//["yes",40,"yes"]

const thumsUp: [string,number,string] =["yes",40,"yes"]

//type aliasking
type coolDrink={
    carbonated: string,
    sugar: 40,
    colour: "yes"
}


// creating our own custom type
type xyz =[string,number,string];

const abc: xyz  = ["yes",40,"yes"]