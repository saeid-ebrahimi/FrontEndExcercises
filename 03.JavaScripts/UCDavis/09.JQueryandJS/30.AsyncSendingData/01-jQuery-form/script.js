// add script here
const formDataURL = "https://cpe-web-assignments.ucdavis.edu/formprocessing/processor.php"

$("#formdata").load(formDataURL)
$("#myForm").validate()
let dataString
$("#myForm").submit( event =>{
	event.preventDefault()
	if( $("#myForm").valid() === true){
		dataString = $(this).serialize()
		console.log(dataString)
	}
	$.ajax({
		type: "POST",
		url: formDataURL,
		data: dataString,
		success: data =>{
			$("#formdata").html(data)
			$("#myForm").clearForm()
		}
	})
})
$.fn.clearForm = function () {
	return this.each(function () {

		const type = this.type;
		const tag = this.tagName.toLowerCase();

		if (tag == 'form') {
			return $(':input', this).clearForm();
		}
		if (type == 'text' || type == 'password' || type == 'email' || type == 'url' || tag == 'textarea') {
			this.value = '';
		}
		else if (type == 'checkbox' || type == 'radio') {
			this.checked = false;
		}
		else if (tag == 'select') {
			this.selectedIndex = -1;
		}
	});
};