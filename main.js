function preload()
{

}

function setup()
{
    canvas = createCanvas(300, 336);
    canvas.parent("canvas");
    video = createCapture(VIDEO);
    video.size(300,336);



    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded()
{
    console.log("Model Loaded");
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +", noseY = " + noseY);
        
    }
}

function draw()
{

}
