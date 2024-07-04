let student=[]
let editindex =-1;

function formdetails(){
    let name=document.getElementById("a1")
    let age=document.getElementById("a2")
    if (editindex === -1){
        student.push({name:name1.value,age1:age.value})
    }else{
        student[editindex]={name:name1.value,age:age1.value};
        editindex = -1;
    }
    name1.value ='';
    age1.value ='';

    console.log(student);
    displaydetails();
}
function edit(index){
    let name1 =document.getElementById("name");
    let age1 =document.getElementById("age");

    name1.value=data[index].name;
    age1.value=data[index].age;
    
    editindex = index;

}
function deletitem(index){
    data.splice(index,1);
    displaydetails();
}
function displaydetails(){
    let detailsdiv =document.getElementById("details");
    detailsdiv.innerHTML='';

    data.foreach(functon(item,index){
        let itemdiv = document.createElement("div");
        itemdiv.innerHTML="name:"+item.name+",age:"+item.age+
        "<button onclick='edit("+ index +")'>edit</button>" +
        "<button onclick='deleteitem(" + index +")'>delete</button>";


    })
}


