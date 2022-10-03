//onload function and contents added form my "interactive recipe codepen https://codepen.io/mariahdawn9/pen/XWqqPMK 

window.onload = function(){

document.querySelector("#header h1").classList.add("makeBig"); //changes title on page  ``
  
document.querySelector("#header h1").onclick = function() {
  this.classList.toggle("makeWhite");
  } // toggles title color on page

}
//end of window on loadp