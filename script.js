function setup(){
    has = 5;

    rb = 15;
    rh = 120;
    rx = 100;
    ry = (windowHeight/2)-(rh/2);

    rb1 = 15;
    rh1 = 120;
    rx1 = windowWidth-100-rb;
    ry1 = windowHeight/2-(rh1/2);
}

function draw(){
    createCanvas(windowWidth,windowHeight);
    background("green");
    strokeWeight(3);
    stroke(255);
    line(windowWidth/2-(3/2),0,windowWidth/2,windowHeight);
    rect(rx, ry, rb, rh);
    rect(rx1, ry1, rb1, rh1);

    if (keyIsDown (87) && ry > 0+5){
        ry-=has;
    }
    if (keyIsDown (83) && ry+rh < windowHeight-5){
        ry+=has;
    }
    if (keyIsDown (79) && ry1 > 0+5){
        ry1-=has;
    }
    if (keyIsDown (76) && ry1+rh1 < windowHeight-5){
        ry1+=has;
    }
}

function keyPressed(){
    console.log(keyCode);
}


