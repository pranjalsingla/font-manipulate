rightWristX = 0;
leftWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#f2f0c7');
    document.getElementById("font_size").innerHTML = "Font size of the text is "+ difference+" px";
    textSize(difference);
    fill('#244A4A');
    text('Pranjal',29,270);

}

function modelLoaded(){
    console.log('Posenet model is initialized');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX);
        console.log("left wrist x = "+leftWristX+", right wrist x = "+rightWristX+", difference = "+ difference);
        
    }
}