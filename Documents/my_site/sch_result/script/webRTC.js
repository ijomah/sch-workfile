// WebRTC. note you have different code at studentresultsheet
// for older browsers
navigator.getUserMedia ||
  (navigator.getUserMedia = navigator.mediaDevices.getUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia);
  videoBtn = document.getElementById('vidbtn');
  window.URL = window.URL || window.webkitURL || window.mozURL || window.maURL;


var constraints = {video: true};
videoBtn = document.getElementById('vidbtn');
  Window.URL = Window.URL || Window.webkitURL || Window.mozURL || Window.maURL;
videoBtn.addEventListener('click' , () => {

    // Prefer camera resolution nearest to 1280x720.
 var constraints = { audio: true, video: { width: 320, height: 240 } };

 navigator.mediaDevices.getUserMedia(constraints)
 .then(function(mediaStream) {
  var video = document.querySelector('video');
  video.srcObject = mediaStream;
  video.onloadedmetadata = function(e) {
    video.play();
  };
})
}
.catch((err) => { 
    console.log(err.name + ": " + err.message);
});
    /*function successCallback(stream) {
    var video = document.querySelector("video");
    video.src = Window.URL.creatObjectURL(stream);
}

function errorCallback(error) {
    console.log("navigator.getUserMedia error:", error);
}

navigator.getUserMedia(constraints, successCallback, errorCallback);

var vconstraints = { 
    video: {
    mandatory: {
      maxWidth: 320,
      minHeight: 120
    },
  }
};

var vgaConstraints = {
    video: {
        mandatory: {
            maxWidth: 640,
            maxWidth: 360
        }

    }
};

var hdConstraints = {
    video: {
        mandatory: {
            maxWidth: 1200,
            maxWidth: 720
        }

    }
};

var Constraints = {
    video: {
        mandatory: {
            maxWidth: 640,
            maxWidth: 360
        }

    }
};
}); */