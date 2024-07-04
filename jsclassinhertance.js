class car{
    constructor(brand){
        this.carname=brand;
    }
}
Present() {
    return'i have a '+this.carname;
}
class model extends car{
    constructor (brand,mod){
        super(brand);
        this.model=mod;
    }
}
show(){
    return this.Present()+'it is a '+this model;
}
const mycar=new model("ford","bmw");
console.log(mycar.show())