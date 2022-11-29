//onload function and contents added form my "interactive recipe codepen https://codepen.io/mariahdawn9/pen/XWqqPMK 

window.onload = function(){

document.querySelector("#header h1").classList.add("makeBig"); //changes title on page  ``
  
document.querySelector("#header h1").onclick = function() {
  this.classList.toggle("makeWhite");
  } // toggles title color on page

document.querySelector("#ingredients h4").onclick = function() {
  listItems = document.querySelectorAll("#ingredients ul");
  for(x=0; x<2;x++){
    listItems[x].style.display = "block";
  }
  
  listTitle = document.querySelectorAll("#ingredients p");
    for(x=0; x<2;x++){
    listTitle[x].style.display = "block";
  }
 } //displays ingredients 

 document.querySelector("#equipment h4").onclick = function() {
   document.querySelector("#equipment ul").style.display = "block";
 } //displays equipment 
 
 document.querySelector("#directions h4").onclick = function() {
   directionsListItems = document.querySelectorAll("#directions ol");
    for(x=0; x<2;x++){
    directionsListItems[x].style.display = "block";
  }
  directionsListTitle= document.querySelectorAll("#directions p");
      for(x=0; x<2;x++){
    directionsListTitle[x].style.display = "block";
      }
 } //displays directions
 
 document.querySelector("#ingredients ul").innerHTML +="<li>Love!</li>";
}
//end of window on load