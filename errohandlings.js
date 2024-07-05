function handled(){
    let message=document.getElementById('s1');
    message.innerHTML="";
    let x=document.getElementById("a1").value;
    try{
        if(x.trim()=="")throw "empty";
        if(isNaN(x))throw "not a number";
        x=Number(x);
        if(x < 5) throw "too low";
    if(x > 10) throw "too high";
    }
    catch(err){
        message.innerHTML = "number is" + err + ".";
    }
    finally{
        document.getElementById("a1").value = "";
    }
}