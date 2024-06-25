function loop(){
    let i=0
    while(i<=10){
        console.log(i);
        i++
    }
    
}
function sum(){
    let a=parseInt(document.getElementById("a1").value)
    let c=parseInt(document.getElementById("a2").value)
    s=0
    while(a<=c){
        s+=a
        a++
    }
    console.log(s);
}
function even(){
    let g=parseInt(document.getElementById("a1").value)
    let d=parseInt(document.getElementById("a2").value)
    s=0
    while(g<=d){

        if(g%2==0){
            s+=g
         
        }
          
        g++
    } 
    console.log(s);
}
function all1(){
    let l=parseInt(document.getElementById("a1").value)
    let m=parseInt(document.getElementById("a2").value)
    s=0
    b=0
    f=0
    while(l<=m){
        f+=l
        if(l%2==0){
            s+=l
        }
        else{
            b+=l
        }
            l++
    }
    console.log(s,b,f);
}