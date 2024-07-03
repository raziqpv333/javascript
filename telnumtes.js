function telnum(){
    let tel1=document.getElementById("tel1")
    if (tel1.value.match(/^[9876]\d{9}$/)){
        document.getElementById("phonnum").innerHTML="number is valid"
    }
    else{
        document.getElementById("phonnum").innerHTML="number not valid"
    }
}