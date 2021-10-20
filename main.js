
song="";
song1="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreleftWrist=0;
scoreRightWrist=0;
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
}function gotPoses(results)
{
     if(results.length>0)
     {
         console.log(results);
         scoreleftWrist=results[0].pose.keypoints[9].score;
         scoreRightWrist=results[0].pose.keypoints[10].score;
         console.log("scoreleftWrist= "+scoreleftWrist);
         leftWristX=results[0].pose.leftWrist.x;
         leftWristY=results[0].pose.leftWrist.y;
         console.log("leftWristX="+leftWristX+"leftwristY="+leftWristY);
         rightWristX=results[0].pose.rightWrist.x;
         rightWristY=results[0].pose.rightWrist.y;
         console.log("rightWristX="+rightWristX+"rightwristY="+rightWristY);
     }
}
function draw(){
    image(video,0,0,600,500);
    fill("#fff700");
    stroke("#ff0400");
    if(scoreRightWrist>0)
    {
        circle(rightWristX,rightWristY,50);
        if(rightWristY>0&&rightWristY<=100)
        {
            document.getElementById("speed").innerHTML="spped=0.5x";
            song.rate(0.5);
        }
         else if(rightWristY>100&&rightWristY<=200)
        {
            document.getElementById("speed").innerHTML="speed=1x";
            song.rate(1);
        }
        else if(rightWristY>200&&rightWristY<=300)
        {
            document.getElementById("speed").innerHTML="speed=1.5x";
            song.rate(1.5);
        }
        else if(rightWristY>300&&rightWristY<=400)
        {
            document.getElementById("speed").innerHTML="speed=2x";
            song.rate(2);
        }
        else if(rightWristY>400&&rightWristY<=500)
        {
            document.getElementById("speed").innerHTML="speed=2.5x";
            song.rate(2.5);
        }
    }
    if(scoreleftWrist>0){
        fill("ff0400");
    stroke("#fff700");
    circle(leftWristX,leftWristY,50);
    InNumber=Number(leftWristY);
    removeDecimals=floor(InNumber);
    volume=removeDecimals/500;
    document.getElementById("volume").innerHTML="volume= "+volume;
    song.setVolume(volume);}
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
