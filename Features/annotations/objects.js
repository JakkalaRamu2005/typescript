var person = {
    x: 12,
    y: "hello"
};
var details = {
    name: "deepak",
    age: 18,
    coords: {
        lan: 20,
        lng: 23
    },
    setAge: function (age) {
        this.age = age;
        console.log("Users Current Age is ".concat(this.age));
    }
};
// const {age}:{age:number}=details;
// console.log(age)
var _a = details.coords, lan = _a.lan, lng = _a.lng;
console.log(lan, lng);
