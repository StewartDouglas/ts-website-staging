$(document).ready(function(){

	// see http://jqueryvalidation.org/ for more information
	$('#sign-up-form').validate({
		rules: {
			first_name: {
				required: true,
				minlength: 2
			},
			last_name: {
				required: true,
				minlength: 2
			},
			organisation: {
				required: true,
				minglength: 2
			},
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,				
				minlength: 8
			},
			confirmation: {
				required: true,
				minlength: 8,
				equalTo: '#password'
			}
		},
		message: {
			first_name: {
				require: 'Please enter your first name.'
			},
			confirmation: {
				equalTo: 'Please enter the same password as above.'
			}
		}
	});
});