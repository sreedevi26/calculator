function displaydata(data){
    txt.value+=data
}
function ac(){
    txt.value=""
}
function evaluateexp(){
    exp=txt.value
    txt.value=eval(exp)
}
function backspace(){
    data=txt.value
    txt.value=data.slice(0,-1)
}
