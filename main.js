
song="";
song1="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function stop(){
    song.stop();
    song1.stop();
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("ok");
}
function draw(){
    image(video,0,0,600,500);
    fill("#fff700");
    stroke("#ff0400");
    circle(leftWristX,leftWristY,50);
}
function preload(){
song=loadSound("spiderman.mp3.mp3");
song1=loadSound("Ice cream.mp3");
}
function play(){
song.play();
song.setVolume(1);
song.rate(1);
song1.stop();
}
function play1(){
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
    song.stop();
}
function gotPoses(results)
{
     if(results.length>0)
     {
         console.log(results);
         leftWristX=results[0].pose.leftWrist.x;
         leftWristY=results[0].pose.leftWrist.y;
         console.log("leftWristX="+leftWristX+"leftwristY="+leftWristY);
         rightWristX=results[0].pose.rightWrist.x;
         rightWristY=results[0].pose.rightWrist.y;
         console.log("rightWristX="+rightWristX+"rightwristY="+rightWristY);
     }
}