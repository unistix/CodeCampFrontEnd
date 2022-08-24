

function sendEmail(){
	Email.send({
		    Host : "smtp.gmail.com",
		    Username : "************",
		    Password : "************",
		    To : '**************',
		    From : document.getElementById("email").value,
		    Subject : "New Client Contact",
		    Body : "And this is the body"
		}).then(
		  message => alert(message)
		);

	//use node mailer smpt is downs
	
}