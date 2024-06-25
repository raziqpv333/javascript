function doowhile(){
    let i=0
    do{
        console.log(i)
        i++
    }
    while(i<=10)
}
function sumof(){ 
    let a=parseInt (document.getElementById("a1").value)
    let b=parseInt (document.getElementById("a2").value)
    s=0
    v=0
    p=0
    do{
        p+=a
        if(a%2==0){
            v+=a
        }
        else{
            s+=a
        } 
        a++
    }
    while(a<=b)

console.log(p,v,s);
    
}