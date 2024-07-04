class  car {
    constructor (name,year) {
        this.name=name
        this.year=year
    }
}
const mycar1=new car("ford",2014);
const mycar2=new car("bmw",2021);
console.log(mycar1.name + " " + mycar2.name)