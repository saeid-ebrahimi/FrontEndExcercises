(function () {

	"use strict";

	const formProcessorUrl = "https://cpe-web-assignments.ucdavis.edu/formprocessing/processor.php"
	const contactForm = document.getElementById('myForm');
	contactForm.addEventListener('submit', validateForm);

	// The actual form validation function. Kicks off the ajax submission at the bottom.	
	function validateForm(event) {
		event.preventDefault();

		const name = document.getElementById('name').value;
		const email = document.getElementById('email').value;
		const url = document.getElementById('url').value;
		const comments = document.getElementById('comments').value;

		const reName = /^[a-zA-Z]+(([\'\- ][a-zA-Z])?[a-zA-Z]*)*$/;
		const reEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
		const reUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

		const allLabels = document.querySelectorAll('label');
		allLabels.forEach(eachLabel => {
			eachLabel.style.color = "black";
		});

		let errors = 0;

		if (!reName.test(name)) {
			document.getElementById('name-label').style.color = "red";
			errors++;
		}

		else if (!reEmail.test(email)) {
			document.getElementById('email-label').style.color = "red";
			errors++;
		}

		else if (url !== '' && !reUrl.test(url)) {
			document.getElementById('url-label').style.color = "red";
			errors++;
		}

		else if (comments == "") {
			document.getElementById('comments-label').style.color = "red";
			errors++;
		}

		else if (errors === 0) {
			sendData();
		}
	}

	async function sendData() {
		// send data and get response...
		const data = new FormData(contactForm)
		const fetchPromise = await fetch(formProcessorUrl,{
			method: "POST",
			body: data
		})
		const content = await fetchPromise.text()
		document.getElementById("formdata").innerHTML = content
		const fields = document.querySelectorAll(".data")
		fields.forEach( field => { field.value = "" })
	}

}());
