const username= localStorage.getItem('username');
const password= localStorage.getItem('password');
function submitForm() {
	// const email = document.getElementById("email").value;
	const usernameInput = document.getElementById("usernameInput").value;
	const passwordInput = document.getElementById("passwordInput").value;
   
	// Store inputs in localStorage
	// localStorage.setItem('email', email);
	// localStorage.setItem('username', username);
	// localStorage.setItem('password', password);
   if(usernameInput==username&&passwordInput==password){
    alert("successful "+usernameInput+" "+passwordInput);
	window.location.href = 'homepage.html';
   }
   else{
    alert("unsuccessful");
   }
}