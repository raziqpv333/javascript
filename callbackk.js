function first(s){
    console.log(s)
}
function calc(a,b,first){
    let s=a+b
    first(s)
}
calc(3,3,first)