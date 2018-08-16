$(document).ready(function(){
	
	
	$(".sign-in-button").click(function(event) {
		event.preventDefault();
		var email = $(".sign-in-email").val();
		var password = $(".sign-in-password").val();

		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(function(response) {
			window.location = "newsfeed.html?id=" + response.user.uid;
		})
		.catch(function(error) {
  		// Handle Errors here.
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		console.log(errorCode, errorMessage);
		});
	})

	$(".btn-register-page").click(function() {
		event.preventDefault();
		window.location = "register.html"

	})

})