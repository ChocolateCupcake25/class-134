song=''
status='';
objects=[];
function preload(){
    song=loadSound("ring.mp3");
}
function setup(){
    canvas=createCanvas(350,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(350,350);
    video.hide();

    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML='Status: Object Detected';
}
function modelLoaded(){
    console.log('Model is Loaded!');
    status= true;

}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects=results;
}
function draw(){
    image(video,0,0,350,350);
    if(status!=''){
        r=random(255);
        g=random(255);
        b=random(255);
        objectDetector.detect(video,gotResults);
        for(i=0;i<objects.length;i++){
            document.getElementById('status').innerHTML="Status: Object Detected";
            
            fill(r,g,b);
            percent=floor(objects[i].confidence*100);
            text(objects[i].label + ' ' + percent + '%',objects[i].x,objects[i].y);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        
        if(object[i].label=='person'){
           console.log('song id stopped');
            document.getElementById('person').innerHTML='Person is  detected';
            song.stop();
        }
        else{
            document.getElementById('person').innerHTML='Peron is not detected';
            console.log('song is playing');
            song.play();
        }
    }
    if(objects.length==0){
        document.getElementById('person').innerHTML='Peron is not detected';
        console.log('song is playing');
        song.play();
    }
}
}
//     else if(status!=''){    
//         song.play();
//         r=random(255);
//         g=random(255);
//         b=random(255);
//         objectDetector.detect(video,gotResults);
//         for(i=0;i<objects.length;i++){
//             document.getElementById('status').innerHTML="Status: Object Detected";
//             fill(r,g,b);
//             percent=floor(objects[i].confidence*100);
//             text(objects[i].label + ' ' + percent + '%',objects[i].x,objects[i].y);
//             noFill();
//             stroke(r,g,b);
//             rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
//         }}
// }
