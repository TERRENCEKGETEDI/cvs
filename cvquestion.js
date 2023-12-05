function submitForm() {
	const answer1 = document.getElementById("answer1").value;
	let answer2 = document.getElementById("answer2").value;
	let answer3 = document.getElementById("answer3").value;
	let answer4 = document.getElementById("answer4").value;
	let answer5 = document.getElementById("answer5").value;
	let answer6 = document.getElementById("answer6").value;
	let answer7 = document.getElementById("answer7").value;
	let answer8 = document.getElementById("answer8").value;
	let answer9 = document.getElementById("answer9").value;
	let answer10 = document.getElementById("answer10").value;
	let answer11 = document.getElementById("answer11").value;
	let answer12 = document.getElementById("answer12").value;
   
	// Store inputs in localStorage
	localStorage.setItem('answer1', answer1);
	localStorage.setItem('answer2', answer2);
	localStorage.setItem('answer3', answer3);
	localStorage.setItem('answer4', answer4);
	localStorage.setItem('answer5', answer5);
	localStorage.setItem('answer6', answer6);
	localStorage.setItem('answer7', answer7);
	localStorage.setItem('answer8', answer8);
	localStorage.setItem('answer9', answer9);
	localStorage.setItem('answer10', answer10);
	localStorage.setItem('answer11', answer11);
	localStorage.setItem('answer12', answer12);
   
	window.location.href = 'cvanswers.html';
}