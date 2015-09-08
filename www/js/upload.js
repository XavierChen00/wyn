
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

// Called when a photo is successfully retrieved
//

function getPhoto(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(onPhotoURISuccess, onFail, {quality:50, destinationType:navigator.camera.DestinationType.DATA_URL,
			 sourceType:navigator.camera.PictureSourceType.PHOTOLIBRARY});
}

// Called if something bad happens.
//
function onFail(message) {
    alert('Failed because: ' + message);
}

//  });
    $('#Post').bind("click", function(e) {
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
    });

});
