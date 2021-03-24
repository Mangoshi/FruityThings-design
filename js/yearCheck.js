(function () {
	let currentYear = (new Date).getFullYear();
	let copyYear = document.querySelectorAll('.year');
	
	for (let i = 0; i < copyYear.length; i++) {
		copyYear[i].textContent = currentYear;
	}
}());