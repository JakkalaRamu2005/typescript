const oldBmw = {
    Name: "BMW",
    cap:3345,
    
    year: "2000"
}

const printCarDetails =(vehicle:{Name:string,cap:number,year:string}):void=>{
    console.log(`The car Name is:${vehicle.Name}`)
    console.log(`Capacity of the Car is:${vehicle.cap}`)
    console.log(`Manufactured in the year:${vehicle.year}`)
        


}
printCarDetails(oldBmw);