function fun1(){
let mycar="";
const myveh={
    name:"josep",
    age:50,
    cars:[
        {name:"ford",model:["mustang","gt","fiesta"]},
        {name:"BMW",model:["x5","classic","rollet"]},
        {name:"fiat",model:["panda","500"]}
    ]
    }    
    for (let i in myveh.cars){
        mycar+="<h2>" +myveh.cars[i].name +"</h2>";
        for(let j in myveh.cars[i].model){
            mycar +=myveh.cars[i].model[j] +"<br>";
            
        }
    }
    document.getElementById("demo").innerHTML = mycar;        
}