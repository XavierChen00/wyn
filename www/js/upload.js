
var pictureSource; // picture source
var destinationType; // sets the format of returned value
var imagedata = "";
// Wait for device API libraries to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
Parse.initialize("hrA3EdYBYrNz9SKLtUG0OpSIN5L9L0zQUvDIyLUs", "ALVDecc9XnfGQuCCO3rARwFxIOFSuRjyPkMuOHAp");

function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}

function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64-encoded image data
      // console.log(imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The in-line CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI
      // console.log(imageURI);

      // Get image handle
      //
      var largeImage = document.getElementById('largeImage');

      // Unhide image elements
      //
      largeImage.style.display = 'block';

      // Show the captured photo
      // The in-line CSS rules are used to resize the image
      //
      largeImage.src = imageURI;
    }

    // A button will call this function
    //
// Called when a photo is successfully retrieved
//
$("#SelectPic").click(function getPhoto(){
		navigator.camera.getPicture(onPhotoURISuccess, onFail,
			{quality:50, destinationType:navigator.camera.DestinationType.DATA_URL,
			 sourceType:navigator.camera.PictureSourceType.PHOTOLIBRARY});
	});

//  });
/*    $('#Post').bind("click", function(e) {
    var noteText = $("#QuestionText").val();
    var parsefile = new Parse.File("mypic.jpg", { base64: imagedata });
    console.log(parseFile);
    parseFile.save().then(function() {
        var note = new Parse.Object.extend("Upload");
        note.set("Username", Parse.User.current().getUsername());
        note.set("Question", noteText);
        note.set("Photo", parseFile);
        note.save();
        alert("Success! You make check your results in your profile page");
    }); */

});
