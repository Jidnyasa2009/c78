var arraya = ["download.jpg" , "images(1).png" , "images.png"];
var i = 0   ;
var arraya1 = ["Parathana" , " Manoj" , "Manasvi"];
 function next() {
     i++
     var  updateimg =  arraya[i];
document.getElementById("myimage").src = updateimg;
var updatename =   arraya1[i];
document.getElementById("name").innerHTML = updatename ;
}