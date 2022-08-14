stats = "";
input_object = "";

function setup(){
    canvas = createCanvas(380,380);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function start(){
    object_detector = ml5.objectDetector('cocoSSD', modelLoaded);
    input_object = document.getElementById("object_name").value;
    document.getElementById("status").innerHTML = "detecting the object";
    document.getElementById("object_name").innerHTML = "";
}
function modelLoaded(){
   console.log("Model Loaded");
   stats = true;
}
function draw(){
    image(video, 0,0,380,380);
}