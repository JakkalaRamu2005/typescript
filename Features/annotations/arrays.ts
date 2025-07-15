const Colors : string[]=["red","black","blue","orange"]

//Multi Typed Arrays
const carsManu:(string | number)[] =["BMW",1916,"Benz",1926]

// 2D arrays
const carsMake:(string | number)[][]=[
    ["BMW",1916],
    ["benz",1926]
]

// stops users from pushing different data type into an array 
// it restricts the error behaviours
colors.push(100);


//infereccing is more easier
const poppedColor = colors.pop();


//helps to remove any/never data type
const dates:(Date | string)[] =[new Date()]
