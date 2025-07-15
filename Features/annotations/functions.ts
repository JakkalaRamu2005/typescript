const add=function(a:number,b:number):number{
    return a+b 
}

const sub =function(a:number,b:number):number{
    return a-b 
}

function mul(a:number,b:number):number{
    return a*b 
}

const div = (a:number,b:number):number=>{return a/b}



const loggerDetails =(msg:string):void=>{
    console.log(msg);
}

const errorDetails=(msg:string):never=>{
    throw new Error();
    console.log("IB-1");
}


const todayWeather ={
    date: new Date(),
    weather: "sunny"
}

const weatherUpdate =({date,weather} :{date:Date,weather:string}):void=>{
    console.log(`Today(${date})Todays Weatheer is ${weather}`)
}
weatherUpdate(todayWeather);