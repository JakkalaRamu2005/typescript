// OOPS -- Object Oriented Programming Style 
// Procedural Programming Style 
// creating objects using classes => Python, C++, Java... 
//langauge will by default give you an object class Vehicle{
// }=> JS, TS 
// modifiers => public, Private, Protected __dundlers which have double underscore 
class Vehicle {
    color: string

    constructor(color: string) {
        this.color = color
    }



    private drive(): void {
        console.log('izz izz....')
    }
    protected(): void {
        console.log("beep beep")
    }
    honk(): void {
        console.log("beep")
    }
    drivingCar(): void {
        this.drive()
    }
}


class Car extends Vehicle {
    // private methods cannot be accessible by child class 

    //if you are over writing any parent class method, make sure it is only a Public method
    constructor(color: string) {
        super(color)
    }
    drive(): void {
        console.log("This is from the car Class")
    }

    //protected methods can be accessed by same class & children class 
    honk(): void {
        this.honk()
    }



}


const vehicle = new Vehicle(); //creating an instance of obj from class Vehicle 
const bmw = new Car(); // creting an instance from class Car 
bmw.drivingCar();


vehicle.drivingCar();
vehicle.honk();

