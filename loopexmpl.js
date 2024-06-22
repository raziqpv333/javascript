function loop(){
    let a=parseInt(document.getElementById("a1").value)
    let c=parseInt(document.getElementById("a2").value)
    s=0
    for(i=a;i<=c;i++){
        s+=i
       
    }
    document.write(s,"<br>")
}
function odd(){
    let m=parseInt(document.getElementById("a1").value)
    let n=parseInt(document.getElementById("a2").value)
    o=0
    for(i=m;i<=n;i++){
        if(i%2==1){
            document.write(i)
        }
    }
    
}

