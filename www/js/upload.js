document.addEventListener("deviceready", function() {
//
var pictureSource; // picture source
var destinationType; // sets the format of returned value
var imagedata = "";
// Wait for device API libraries to load
//


// device APIs are available
//
Parse.initialize("hrA3EdYBYrNz9SKLtUG0OpSIN5L9L0zQUvDIyLUs", "ALVDecc9XnfGQuCCO3rARwFxIOFSuRjyPkMuOHAp");
pictureSource = navigator.camera.PictureSourceType;
destinationType = navigator.camera.DestinationType;

// Called when a photo is successfully retrieved
//
function onPhotoDataSuccess() {
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
      smallImage.src = "data:image/jpeg;base64,"
      
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess() {
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
      largeImage.src = "data:image/jpeg;base64,"
      
    }

    // A button will call this function
    //
    function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function capturePhotoEdit() {
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    getPhoto = function () {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: pictureSource.PHOTOLIBRARY });
    };

    // Called if something bad happens.
    //
    function onFail(message) {
      alert('Failed because: ' + message);
    }

//  });
    $('#Post').bind("click", function(e) {
    var noteText = $("#QuestionText").val();
    var parseFile = new Parse.File("mypic.jpg", {
        base64: imagedata
    });
    parseFile.save().then(function(){
        var note = new Parse.Object.extend("Upload");
        note.set("Username", Parse.User.current().getUsername());
        note.set("Question", noteText);
        note.set("Photo", parseFile);
        note.save(null, {
            success:function(ob) {
              window.location.replace("profile.html");
            }, error:function(e) {
              console.log(e);
            }
          });
      });
});
});