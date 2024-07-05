function display(f){
    console.log(f)
}
let mypromise=new Promise(function(myresolve,myreject){
    let s=0
    if(s==0){
        myresolve("ok")
    }else{
        myreject("error")
    }
})
mypromise.then(
    function(value){display(value);},
    function(error){display(error);}
)