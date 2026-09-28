function welcometxt(){
    alert("Welcome to our website! We are glad to have you here. Please feel free to explore our products and services. If you have any questions or need assistance, don't hesitate to contact us. Enjoy your visit!");
}
function availibility1(){
    document.getElementById("a1").innerHTML = "in stock.";
}
function availibility2(){
    document.getElementById("a2").innerHTML = "out of stock.";
}
function availibility3(){
    document.getElementById("a3").innerHTML = "out of stock.";
}
function availibility4(){
    document.getElementById("a4").innerHTML = "in stock.";
}
function availibility5(){
    document.getElementById("a5").innerHTML = "out of stock.";
}
window.onload = welcometxt;
    document.getElementById("year").innerHTML = new Date().getFullYear();