$( document ).ready(function () {
    Parse.initialize("hrA3EdYBYrNz9SKLtUG0OpSIN5L9L0zQUvDIyLUs", "ALVDecc9XnfGQuCCO3rARwFxIOFSuRjyPkMuOHAp");
	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	testObject.save({foo: "bar"}).then(function(object) {
  		alert("yay! it worked");
	});
	$("#Login").click(function() {
		Parse.User.logIn($("#UsernameIn").val(), $("#PasswordIn").val(), {
	  		success: function(user) {
	    		alert("Success!");
	  		},
	  		error: function(user, error) {
	    		alert("Error: " + error.code + " " + error.message); 
	  		}
		});
	})
});
