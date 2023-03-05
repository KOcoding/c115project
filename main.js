noseX=0;
noseY=0;

function preload() {
  clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup() {
  canvas = createCanvas(400, 400);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(400,400);
  video.hide();
  posenet=ml5.poseNet(video,modelLoaded);
  posenet.on('pose',gotposes);
}

function gotposes(results){
  if(results.length > 0 ){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX="+noseX+",noseY="+noseY)
  }
}

function modelLoaded(){
  console.log("modelLoaded");
}

function draw(){
  image(video,0,0,400,400);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
