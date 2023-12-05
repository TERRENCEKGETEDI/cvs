function submitForm() {
	const email = document.getElementById("email").value;
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;
   
	// Store inputs in localStorage
	localStorage.setItem('email', email);
	localStorage.setItem('username', username);
	localStorage.setItem('password', password);
   
    alert("successful"+email+" "+username+" "+password);
	window.location.href = 'login.html';
}