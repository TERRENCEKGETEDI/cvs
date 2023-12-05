document.addEventListener("mouseover", typerMake);
var i = 0;
var txt = 'Welcome to our website get ready to answer our question in preparation for your dream interview of your professional career!!!!!';
var speed = 50; 

function typerMake(){
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typerMake, speed);
  }
}
document.addEventListener("mouseout" , out);
var ter=' ';
function out(){
if(i < ter.length){
document.getElementById("demo").innerHTML += ter.charAt(i);
    i++;
    setTimeout(out, speed);
	}

}
