//interfaces are used to create custom date types


// not equal to and the letter should be of the capital letter
interface Vehicle{
    // Name:string;
    // cap:number;
    // year:Date;
    summary():void

}

const oldBmw = {
    Name: "BMW",
    cap:3345,
    
    year:new Date(),
    summary:():void=>{
        console.log(`${this.Name} car is fastest car where the capacity is ${this.cap}
                    where I bought in ${this.year}`)
    }
}


const car ={
    summary:():void =>{
        console.log("This is Normal Car")
    }
}

const printCarDetails =(vehicle:Vehicle):void=>{
    // console.log(`The car Name is:${vehicle.Name}`)
    // console.log(`Capacity of the Car is:${vehicle.cap}`)
    // console.log(`Manufactured in the year:${vehicle.year}`)
    vehicle.summary();
        


}
printCarDetails(car);
printCarDetails(oldBmw);