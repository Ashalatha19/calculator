
const  result = document.getElementById("result")
function display(num){
    result.value += num;
}
function calculate(){
    try{
        result.value = eval(result.value);
    }
    catch(err){
        alert("invalid");
    }
}
function allclear(){
   
result.value= " ";
}

function del(){
    result.value = result.value.slice(0,-1);
}