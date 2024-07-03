function valid(){
    let a1=document.getElementById("a1")
    if (a1.value==''){
        document.getElementById("b1").innerHTML='empty'
    }
    else{
        document.getElementById("b1").innerHTML='filled'
    }
    if (a1.value.match('[a-z]')){
        document.getElementById("b1").innerHTML='match'
    }
    else{
        document.getElementById("b1").innerHTML='not'
    }
}