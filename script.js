// I setup defineres bredde og højde af canvas samt hastighed og score for første gang; disse opdateres løbende
function setup(){
    has = 10;

    rb = windowWidth/80;
    rh = windowHeight/5.5;

    ry = (windowHeight/2)-(rh/2);
    ry1 = (windowHeight/2)-(rh/2);

    size = 50;
    speed = 10; 
    yspeed = 10;

    score1 = 0;
    score2 = 0;

    ex = windowWidth /2;
    ey = windowHeight /2;
}

// Lyde preloades så de er klar til at afspille
function preload(){
    pongv_sound = loadSound('sounds/pong_v.mp3');
    pongh_sound = loadSound('sounds/pong_h.mp3');
}

// Draw funktionen opdateres hele tiden, og det er i den at canvas, bold, og de to rektangler tegnes
// Nederst i draw bliver der chekket om tast "W", "S", "O" eller "L"m er trykket, og rykker på rektanglerne
function draw(){
    createCanvas(windowWidth,windowHeight);
    background(0,125,18);
    strokeWeight(3);
    stroke(255);
    line(windowWidth/2-(3/2),0,windowWidth/2-(3/2),windowHeight);
    rect(50, ry, windowWidth/80, windowHeight/5.5);
    rect(windowWidth-rb-50, ry1, windowWidth/80, windowHeight/5.5);

    bold = new Bold(ex,ey, windowHeight/20);
    bold.lavBold();
    bold.undersogPosition();
    bold.bevaegBold();

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

// Denne funktion ændrer størrelserne når vinduet gøres mindre eller større
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

// Metoden lavBold tegner en ellipse/bold
// Metoden undersogPosition laver en bold og får den til at skifte retning når et rektangel rammes eller den rammer nederste eller øverste side på vinduet
// Hvis bolden flyver ud af højre eller venstre side, får den anden spiller et point, og bolden flyttes tilbage til midten af skærmen med den modsatte hastighed
// Der afspilles en lyd når bold rammer rektangel
// bevaegBold sørger for at bolden bevæger sig med den rigtige hastighed

class Bold{
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    lavBold(){
        ellipse(this.a, this.b, this.c, this.c);
    }

    undersogPosition(){
        if (this.b >= windowHeight){
            yspeed= -yspeed;
        }
        if (this.b <= 0){
            yspeed= -yspeed;
        }
        if (this.a >= windowWidth){
            score1+=1;
            ex = windowWidth /2;
            ey = windowHeight /2;
            speed= -speed;
        }
        if (this.a <= 0){
            score2+=1;
            ex = windowWidth /2;
            ey = windowHeight /2;
            speed = -speed;
        }
        if (this.a+ this.c/2 >= windowWidth-rb-50){
            if (this.b+this.c/2 >= ry1 && this.b-this.c/2 <= ry1+windowHeight/5.5){
                speed = -speed;
                pongh_sound.play(0,1,1,0.3,0.2);
            }
        }
        if (this.a-this.c/2 <= 50+windowWidth/80){
            if (this.b+this.c/2 >= ry && this.b-this.c/2 <= ry+windowHeight/5.5){
                speed = -speed;
                pongv_sound.play(0,1,1,0.3,0.2);
            }
        }
    }

    bevaegBold(){
        ex += speed;
        ey += yspeed;
    }
    
}
