var flipHorizontal = false;

function help() {
  window.alert(`
  Try to upload Images with single Person or Animal.
  You may need to tap all buttons Twice to work properly.
  Many links wont work due to CORS issue.
  `);
}

var img = document.getElementById("img");

var MobileNet = {
  architecture: "MobileNetV1",
  outputStride: 16,
  inputResolution: { width: img.width, height: img.height },
  multiplier: 0.75,
};
var ResNet = {
  architecture: "ResNet50",
  outputStride: 32,
  inputResolution: { width: img.width, height: img.height },
  quantBytes: 2,
};

var canvas, context;

window.onload = () => {
  canvas = document.getElementById("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  context = canvas.getContext("2d");

  context.fillStyle = "#FF0000";
  context.drawImage(img, 0, 0, canvas.width, canvas.height);

  AnalyzePose(img, {});
};

function AnalyzePose(image, model) {
  posenet
    .load(model)
    .then(function (net) {
      const pose = net.estimateSinglePose(image, {
        flipHorizontal: false,
      });
      return pose;
    })
    .then(function (pose) {
      console.log(pose);

      pose.keypoints.forEach((element) => {
        context.fillRect(element.position.x, element.position.y, 5, 5);
      });
    });
}

function loadFile(event) {
  img.src = URL.createObjectURL(event.target.files[0]);
  console.log(img);
}

function UploadImage() {
  event.preventDefault();
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.drawImage(img, 0, 0, canvas.width, canvas.height);

  AnalyzePose(img, {});
}

function LinkSubmit() {
  event.preventDefault();
  context.clearRect(0, 0, canvas.width, canvas.height);

  var imgsrc = document.getElementById("imgsrc").value;
  if (imgsrc != null) {
    try {
      img.src = imgsrc;
    } catch (error) {
      if (error) {
        console.error(error);
        console.log("try another");
      }
    }
  }

  context.drawImage(img, 0, 0, canvas.width, canvas.height);

  AnalyzePose(img, {});
}

// =======================

function GraphicsModel() {
  event.preventDefault();
  context.clearRect(0, 0, canvas.width, canvas.height);

  img.src = "images/csgoT.jpg";

  context.drawImage(img, 0, 0, canvas.width, canvas.height);

  AnalyzePose(img, {});
}

function StandingPose() {
  event.preventDefault();
  context.clearRect(0, 0, canvas.width, canvas.height);

  img.src = "images/stand.jpg";

  context.drawImage(img, 0, 0, canvas.width, canvas.height);

  AnalyzePose(img, {});
}

function DancingPose() {
  event.preventDefault();
  context.clearRect(0, 0, canvas.width, canvas.height);

  img.src = "images/dance.jpg";

  context.drawImage(img, 0, 0, canvas.width, canvas.height);

  AnalyzePose(img, {});
}
