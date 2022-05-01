let result = document.querySelector("#result");

document.querySelector("#press1").addEventListener("click",()=>{
    result.innerText += "1";  //innerText =innerText + "1";
});
document.querySelector("#press2").addEventListener("click",()=>{
    result.innerText += "2";  //innerText =innerText + "2";
});
document.querySelector("#press3").addEventListener("click",()=>{
    result.innerText += "3";  //innerText =innerText + "3";
});
document.querySelector("#press4").addEventListener("click",()=>{
    result.innerText += "4";  //innerText =innerText + "4";
});
document.querySelector("#press5").addEventListener("click",()=>{
    result.innerText += "5";  //innerText =innerText + "5";
});
document.querySelector("#press6").addEventListener("click",()=>{
    result.innerText += "6";  //innerText =innerText + "6";
});
document.querySelector("#press7").addEventListener("click",()=>{
    result.innerText += "7";  //innerText =innerText + "7";
});
document.querySelector("#press8").addEventListener("click",()=>{
    result.innerText += "8";  //innerText =innerText + "8";
});
document.querySelector("#press9").addEventListener("click",()=>{
    result.innerText += "9";  //innerText =innerText + "9";
});
document.querySelector("#press0").addEventListener("click",()=>{
    result.innerText += "0";  //innerText =innerText + "0";
});
document.querySelector("#press00").addEventListener("click",()=>{
    result.innerText += "00";  //innerText =innerText + "00";
});
document.querySelector("#dot").addEventListener("click",()=>{
    result.innerText += ".";  //innerText =innerText + ".";
});
document.querySelector("#add").addEventListener("click",()=>{
    result.innerText += "+";  //innerText =innerText + "+";
});
document.querySelector("#subtract").addEventListener("click",()=>{
    result.innerText += "-";  //innerText =innerText + "-";
});
document.querySelector("#multiply").addEventListener("click",()=>{
    result.innerText += "*";  //innerText =innerText + "*";
});
document.querySelector("#divide").addEventListener("click",()=>{
    result.innerText += "/";  //innerText =innerText + "/";
});
document.querySelector("#clear").addEventListener("click",()=>{
    result.innerText = "";  //innerText = "";
});
document.querySelector("#equal").addEventListener("click",()=>{
    if(result.innerText === ""){
        alert("Please Enter Any Value To Calculate");
    }
    else
        {
            result.innerText = eval(result.innerText);
        }
});