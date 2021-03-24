function setup(){
    has = 5;

    rb = windowWidth/80;
    rh = windowHeight/5.5;

    ry = (windowHeight/2)-(rh/2);
    ry1 = (windowHeight/2)-(rh/2);

    size = 50;
    speed = 10;

    score1 = 0;
    score2 = 0;

    ex = windowWidth /2;
    ey = windowHeight /2;
}

function preload(){
    pongv_sound = loadSound('sounds/pong_v.mp3');
    pongh_sound = loadSound('sounds/pong_h.mp3');
}

function draw(){
    createCanvas(windowWidth,windowHeight);
    background(0,125,18);
    strokeWeight(3);
    stroke(255);
    line(windowWidth/2-(3/2),0,windowWidth/2-(3/2),windowHeight);
    rect(50, ry, windowWidth/80, windowHeight/5.5);
    rect(windowWidth-rb-50, ry1, windowWidth/80, windowHeight/5.5);

    lavBold(ex,ey, windowHeight/10);

    size = windowHeight/10;
    textSize(size);
    fill(255);
    text(score1, (windowWidth-3)/4-(size/2), size);
    text(score2, (windowWidth-3)/4*3-(size/2), size);

    if (keyIsDown (87) && ry > 0+5){
        ry-=has;
    }
    if (keyIsDown (83) && ry+windowHeight/5.5 < windowHeight-5){
        ry+=has;
    }
    if (keyIsDown (79) && ry1 > 0+5){
        ry1-=has;
    }
    if (keyIsDown (76) && ry1+windowHeight/5.5 < windowHeight-5){
        ry1+=has;
    }
}

/*
function keyPressed(){
    console.log(keyCode);
}
*/


function windowResized() { 
    if (ry+rh+5 >= windowHeight){
        ry = windowHeight-rh-5;
    }
    if (ry1+rh+5 >= windowHeight){
        ry1 = windowHeight-rh-5;
    }
    if (ey+windowHeight/10 >= windowHeight){
        ey = windowHeight-windowHeight/10;
    }
    if (ex+windowWidth/10 >= windowWidth){
        ex = windowWidth-windowWidth/10;
    }
}

function lavBold(a,b,c){
    ellipse(a, b, c, c);

    if (a >= windowWidth){
        score1+=1;
        ex = windowWidth /2;
        ey = windowHeight /2;
        speed= -speed;
    }

    if (a <= 0){
        score2+=1;
        ex = windowWidth /2;
        ey = windowHeight /2;
        speed = -speed;
    }

    if (a+ c/2 >= windowWidth-rb-50){
        if (b+c/2 >= ry1 && b-c/2 <= ry1+windowHeight/5.5){
            speed = -speed;
            pongh_sound.play(0,1,1,0.3,0.2);
        }
    }
    if (a-c/2 <= 50+windowWidth/80){
        if (b+c/2 >= ry && b-c/2 <= ry+windowHeight/5.5){
            speed = -speed;
            pongv_sound.play(0,1,1,0.3,0.2);
        }
    }

    ex += speed;
}