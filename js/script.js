let canvas = document.getElementById('canvas');

let c = canvas.getContext('2d');
const UP_ARROW = 38;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const DOWN_ARROW = 40;
const SPACE = 32;
const FONT_FAMILY = 'Staatliches';
const I_BUTTON = 73;
const M_BUTTON = 77;
const ONE_BUTTON = 49;
const TWO_BUTTON = 50;
const THREE_BUTTON = 51;


window.onresize = () => {
    let dpr = window.devicePixelRatio || 1;
    canvas.width = innerWidth * dpr;
    canvas.height = innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    c.scale(dpr, dpr);

    canvas.wPer = window.innerWidth/1366;
    canvas.hPer = window.innerHeight/657;
    canvas.aPer = (canvas.wPer + canvas.hPer)/2;
    canvas.diag= Math.sqrt(window.innerWidth*window.innerWidth + window.innerHeight*window.innerHeight)/2;
    restart();
    gameStage = 4;
}

let MOUSE_POSITION = {
    x: 0,
    y: 0
}

window.onmousemove = (e) => {
    MOUSE_POSITION = {
        x: e.x,
        y: e.y
    }
}

let MOUSE_CLICK = null;

window.onmousedown = (e) => {
    MOUSE_CLICK = {
        x: MOUSE_POSITION.x,
        y: MOUSE_POSITION.y
    }
}

function getMostRecentMouseClick() {
    let click = MOUSE_CLICK;
    MOUSE_CLICK = null;
    return click;
}

let returnX;
let returnY;
let confColl;
c.font = "250px Staatliches";

let gameStage = 4;
let gameSpeed = 5;
let score = 0;
let bgC = 0;
let bgCy = 0;
let bX = window.innerWidth/2;
let bY = window.innerHeight/2;
let gX = window.innerWidth/2;
let gY = window.innerHeight/2;
let degCounter = 0;
let bigDoopie = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let deeeeg = 0;
let greenX = [];
let greenY = [];
let greenYv = [];
let blueX = [];
let blueY = [];
let blueXv = [];
let greenColl = [];
let blueColl = [];
let ecSize = 1;
let crossX = [];
let crossY = [];
let crossDeg = [];
let crossDegv = [];
let crossXv = [];
let crossYv = [];
let crossL = [];
let tranDeg = 0;
let lastTime;
let instX = 0;
let instA = 0 - window.innerWidth;
let partII = 0;
let gameDiff = 2;
let holderrr = 1;
crossX[0] = window.innerWidth/6 + 30;
crossY[0] = window.innerHeight + 80;
crossXv[0] = -15;
crossYv[0] = -15;
crossDeg[0] = -Math.PI/4;
crossDegv[0] = -10*Math.PI/180;
crossX[1] = window.innerWidth/3 - 15;
crossY[1] = window.innerHeight + 80;
crossXv[1] = 8;
crossYv[1] = -12;
crossDeg[1] = Math.PI/4;
crossDegv[1] = 8*Math.PI/180;
crossX[2] = window.innerWidth/2 - 30;
crossY[2] = window.innerHeight + 80;
crossXv[2] = 14;
crossYv[2] = -12;
crossDeg[2] = Math.PI/8;
crossDegv[2] = 2*Math.PI/180;
crossX[3] = window.innerWidth*2/3 + 30;
crossY[3] = window.innerHeight + 80;
crossXv[3] = -18;
crossYv[3] = -12;
crossDeg[3] = -Math.PI/12;
crossDegv[3] = 6*Math.PI/180;
crossX[4] = window.innerWidth*5/6 + 15;
crossY[4] = window.innerHeight + 80;
crossXv[4] = -8;
crossYv[4] = -12;
crossDeg[4] = Math.PI/10;
crossDegv[4] = -9*Math.PI/180;
crossL[0] = "C";
crossL[1] = "R";
crossL[2] = "O";
crossL[3] = "S";
crossL[4] = "S";
let pscore = [];
let pscoreX = [];
let pscoreY = [];
let pscoreXv = [];
let pscoreYv = [];
let pscoreDeg = [];
let pscoreDegv = [];
let direcA = 0;
let partI = 0;
addDots('green');
addDots('green');
addDots('blue');
addDots('blue');

function restart() {
    //canvas.width = innerWidth * dpr;
    //canvas.height = innerHeight * dpr;
    //canvas.style.width = window.innerWidth + 'px';
    //canvas.style.height = window.innerHeight + 'px';
    //c.scale(dpr, dpr);
    gameStage = 1;
    gameSpeed = 5;
    score = 0;
    bgC = 0;
    bgCy = 0;
    bX = window.innerWidth/2;
    bY = window.innerHeight/2;
    gX = window.innerWidth/2;
    gY = window.innerHeight/2;
    degCounter = 0;
    deeeeg = 0;
    greenX = [];
    greenY = [];
    greenYv = [];
    blueX = [];
    blueY = [];
    blueXv = [];
    greenColl = [];
    blueColl = [];
    ecSize = 1;
    crossX = [];
    crossY = [];
    crossDeg = [];
    crossDegv = [];
    crossXv = [];
    crossYv = [];
    crossL = [];
    tranDeg = 0;
    instA = 0;
    instX = 0 - window.innerWidth;
    partII = 0;
    crossX[0] = window.innerWidth/6 + 30;
    crossY[0] = window.innerHeight + 80;
    crossXv[0] = -15;
    crossYv[0] = -15;
    crossDeg[0] = -Math.PI/4;
    crossDegv[0] = -10*Math.PI/180;
    crossX[1] = window.innerWidth/3 - 15;
    crossY[1] = window.innerHeight + 80;
    crossXv[1] = 8;
    crossYv[1] = -12;
    crossDeg[1] = Math.PI/4;
    crossDegv[1] = 8*Math.PI/180;
    crossX[2] = window.innerWidth/2 - 30;
    crossY[2] = window.innerHeight + 80;
    crossXv[2] = 14;
    crossYv[2] = -12;
    crossDeg[2] = Math.PI/8;
    crossDegv[2] = 2*Math.PI/180;
    crossX[3] = window.innerWidth*2/3 + 30;
    crossY[3] = window.innerHeight + 80;
    crossXv[3] = -18;
    crossYv[3] = -12;
    crossDeg[3] = -Math.PI/12;
    crossDegv[3] = 6*Math.PI/180;
    crossX[4] = window.innerWidth*5/6 + 15;
    crossY[4] = window.innerHeight + 80;
    crossXv[4] = -8;
    crossYv[4] = -12;
    crossDeg[4] = Math.PI/10;
    crossDegv[4] = -9*Math.PI/180;
    crossL[0] = "C";
    crossL[1] = "R";
    crossL[2] = "O";
    crossL[3] = "S";
    crossL[4] = "S";
    pscore = [];
    pscoreX = [];
    pscoreY = [];
    pscoreXv = [];
    pscoreYv = [];
    pscoreDeg = [];
    pscoreDegv = [];
    direcA = 0;
    myTimer = window.performance.now();
    lastTime = window.performance.now();
    addDots('green');
    addDots('green');
    addDots('blue');
    addDots('blue');
}

window.onresize();


function init() {
    bigDoopie = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    onkeydown = (e) => {
        if(e.keyCode === UP_ARROW) {
            bigDoopie[1] = 1;
        }
        if(e.keyCode === LEFT_ARROW) {
            bigDoopie[0] = 1;
        }
        if(e.keyCode === RIGHT_ARROW) {
            bigDoopie[2] = 1;
        }
        if(e.keyCode === DOWN_ARROW) {
            bigDoopie[3] = 1;
        }
        if(e.keyCode === SPACE) {
            bigDoopie[4] = 1;
        }
        if(e.keyCode === I_BUTTON) {
            bigDoopie[5] = 1;
        }
        if(e.keyCode === M_BUTTON) {
            bigDoopie[6] = 1;
        }
        if(e.keyCode === ONE_BUTTON) {
            bigDoopie[7] = 1;
        }
        if(e.keyCode === TWO_BUTTON) {
            bigDoopie[8] = 1;
        }
        if(e.keyCode === THREE_BUTTON) {
            bigDoopie[9] = 1;
        }
    }
    onkeyup = (e) => {
        if(e.keyCode === UP_ARROW) {
            bigDoopie[1] = 0;
        };
        if(e.keyCode === LEFT_ARROW) {
            bigDoopie[0] = 0;
        }
        if(e.keyCode === RIGHT_ARROW) {
            bigDoopie[2] = 0;
        }
        if(e.keyCode === DOWN_ARROW) {
            bigDoopie[3] = 0;
        }
        if(e.keyCode === SPACE) {
            bigDoopie[4] = 0;
        }
        if(e.keyCode === I_BUTTON) {
            bigDoopie[5] = 0;
        }
        if(e.keyCode === M_BUTTON) {
            bigDoopie[6] = 0;
        }
        if(e.keyCode === ONE_BUTTON) {
            bigDoopie[7] = 0;
        }
        if(e.keyCode === TWO_BUTTON) {
            bigDoopie[8] = 0;
        }
        if(e.keyCode === THREE_BUTTON) {
            bigDoopie[9] = 0;
        }
    }
}

function addDots(color) {
    if(color == 'green') {
        greenColl.push(0);
        greenX.push(window.innerWidth/2 + (Math.floor(Math.random( )*3 - 1))*100*canvas.aPer);
        greenY.push(Math.floor(Math.random( )*2)*(window.innerHeight + 200*canvas.hPer) - 100*canvas.hPer);
        if(greenY[greenY.length - 1] > 0) {
            greenYv.push(-1);
        } else {
            greenYv.push(1);
        }
    } else {
        blueColl.push(0);
        blueX.push(Math.floor(Math.random( )*2)*(window.innerWidth + 200*canvas.wPer) - 100*canvas.wPer);
        blueY.push(window.innerHeight/2 + (Math.floor(Math.random( )*3 - 1))*100*canvas.aPer);
        if(blueX[blueX.length - 1] > 0) {
            blueXv.push(-1);
        } else {
            blueXv.push(1);
        }
    }
}

function rotatepoint(x,y,deg) {
    if(x == window.innerWidth/2) {
        if(y > window.innerHeight/2) {
            helperDeg = Math.PI/2;
        } else {
            helperDeg = Math.PI*3/2;
        }
    } else {
        helperDeg = Math.atan((window.innerHeight/2 - y)/(window.innerWidth/2 - x + 0.1)) + (x < window.innerWidth/2)*(Math.PI) + (2*Math.PI)*(1 - (x < window.innerWidth/2))*(y < window.innerHeight/2)
    }
    returnX = window.innerWidth/2 + Math.cos(deg*Math.PI/180 + helperDeg)*Math.sqrt((x - window.innerWidth/2)*(x - window.innerWidth/2) + (y - window.innerHeight/2)*(y - window.innerHeight/2));
    returnY = window.innerHeight/2 + Math.sin(deg*Math.PI/180 + helperDeg)*Math.sqrt((x - window.innerWidth/2)*(x - window.innerWidth/2) + (y - window.innerHeight/2)*(y - window.innerHeight/2));
}

function updatePlayer() {
    if(bigDoopie[1] == 1) {
        bY += ((window.innerHeight/2 - 110*canvas.aPer) - bY)*0.12;
    } else if(bigDoopie[3] == 1) {
        bY += ((window.innerHeight/2 + 110*canvas.aPer) - bY)*0.12;
    } else {
        bY += ((window.innerHeight/2) - bY)*0.1;
    }
    if(bigDoopie[0] == 1) {
        gX += ((window.innerWidth/2 - 110*canvas.aPer) - gX)*0.12;
    } else if(bigDoopie[2] == 1) {
        gX += ((window.innerWidth/2 + 110*canvas.aPer) - gX)*0.12;
    } else {
        gX += ((window.innerWidth/2) - gX)*0.1;
    }
}

function drawLine(x1,y1,x2,y2,thickness,degrees,cap,color) {
    c.strokeStyle = color;
    c.beginPath();
    c.lineWidth = thickness;
    rotatepoint(x1,y1,degrees);
    c.moveTo(returnX,returnY);
    rotatepoint(x2,y2,degrees);
    c.lineTo(returnX,returnY);
    c.lineCap = cap;
    c.stroke();
}

function background() {
    degCounter += 0.6*Math.PI/180;
    deeeeg = Math.sin(degCounter)*5;
    c.fillStyle = 'rgba(5,5,25,0.9)'
    //.fillStyle = 'rgba('+5+2*Math.sin(window.performance.now()/1000)+','+5+2*Math.cos(window.performance.now()/1000)+','+25+5*Math.sin(window.performance.now()/1000)+',0.9)';
    c.fillRect(0,0,window.innerWidth,window.innerHeight);
    bgC -= 0.3;
    bgCy -= 0.15;
    for(bgDD = bgC;bgDD < window.innerWidth;bgDD++) {
        drawLine(bgDD,-150,bgDD,window.innerHeight + 150,5*canvas.aPer,deeeeg,'round','rgba(25,25,25,0.3)');
        bgDD += 49;
    }
    for(bgDY = bgCy;bgDY < window.innerHeight + 50;bgDY++) {
        drawLine(-200,bgDY,window.innerWidth+200,bgDY,5*canvas.aPer,deeeeg,'round','rgba(25,25,'+ (50 - (bgDY/window.innerHeight)*20)+',0.3');
        bgDY += 49;
    }
    for(bgDD = bgC;bgDD < window.innerWidth;bgDD++) {
        drawLine(bgDD+4,-150,bgDD+4,window.innerHeight+150,4*canvas.aPer,deeeeg,'round','rgba(75,75,100,0.3)');
        bgDD += 49;
    }
    for(bgDY = bgCy;bgDY < window.innerHeight + 50;bgDY++) {
        drawLine(-200,bgDY+4,window.innerWidth+200,bgDY+4,4*canvas.aPer,deeeeg,'round','rgba(50,'+(30 + (bgDY/window.innerHeight)*40)+','+ (150 - (bgDY/window.innerHeight)*100) +',0.3)');
        bgDY += 49;
    }
    if(bgC < -49.4) {
        bgC = 0;
    }
    if(bgCy < -49.3) {
        bgCy = 0;
    }
}

function writeText(text,x9,y9,sizeandfont,color,degrees,strokesize,strokecolor) {
    c.font = sizeandfont;
    c.fillStyle = color;
    c.strokeStyle = strokecolor;
    c.lineWidth = strokesize;
    c.rotate(degrees);
    c.fillText(text,x9,y9);
    c.strokeText(text,x9,y9);
    c.rotate(-degrees);
}

function drawArc(x,y,radius,sdeg,edeg,color) {
    c.fillStyle = color;
    c.beginPath();
    rotatepoint(x,y,deeeeg);
    c.arc(returnX,returnY,radius,sdeg,edeg,false);
    c.fill();
    c.closePath();
}

function drawPlayer() {
    drawLine(window.innerWidth/2,window.innerHeight/2 - 110*canvas.aPer,window.innerWidth/2,window.innerHeight/2 + 110*canvas.aPer,115*canvas.aPer,deeeeg,'round','rgba(25,25,25,0.5)');
    drawLine(window.innerWidth/2 - 110*canvas.aPer,window.innerHeight/2,window.innerWidth/2 + 110*canvas.aPer,window.innerHeight/2,115*canvas.aPer,deeeeg,'round','rgba(25,25,25,0.5)');
    drawLine(window.innerWidth/2,window.innerHeight/2 - 110*canvas.aPer,window.innerWidth/2,window.innerHeight/2 + 110*canvas.aPer,105*canvas.aPer,deeeeg,'round','rgba(0,100,255,0.2)');
    drawLine(window.innerWidth/2 - 110*canvas.aPer,window.innerHeight/2,window.innerWidth/2 + 110*canvas.aPer,window.innerHeight/2,105*canvas.aPer,deeeeg,'round','rgba(0,255,75,0.2)');
    drawArc(bX,bY,50*canvas.aPer,0,2*Math.PI,'rgba(0,100,255,1)');
    drawArc(gX,gY,50*canvas.aPer,0,2*Math.PI,'rgba(0,255,75,1)');
    c.fillStyle = 'rgba(0,100,255,0.55)';
    c.beginPath();
    rotatepoint(bX,bY,deeeeg);
    c.arc(returnX,returnY,50*canvas.aPer,0,2*Math.PI,false);
    c.fill();
    c.closePath();
    rotatepoint(gX,gY,deeeeg);
    c.fillStyle = 'rgba(0,255,75,0.55)';
    c.beginPath();
    c.arc(returnX,returnY,50*canvas.aPer,0,2*Math.PI,false);
    c.fill();
    c.closePath();
}

function updateDots() {
    for(deed = 0;deed < greenX.length;deed++) {
        greenY[deed] = greenY[deed] + gameSpeed*greenYv[deed];
        if(greenYv[deed] == 1) {
            if(greenY[deed] > window.innerHeight + 40*canvas.aPer) {
                greenY.splice(deed,1);
                greenX.splice(deed,1);
                greenYv.splice(deed,1);
                greenColl.splice(deed,1);
                deed -= 1;
                addDots('green');
            }
        } else {
            if(greenY[deed] < -40*canvas.aPer) {
                greenY.splice(deed,1);
                greenX.splice(deed,1);
                greenYv.splice(deed,1);
                greenColl.splice(deed,1);
                deed -= 1;
                addDots('green');
            }
        }
    }
    for(deed = 0;deed < blueX.length;deed++) {
        blueX[deed] = blueX[deed] + gameSpeed*blueXv[deed];
        if(blueXv[deed] == 1) {
            if(blueX[deed] > window.innerWidth + 40*canvas.aPer) {
                blueY.splice(deed,1);
                blueX.splice(deed,1);
                blueXv.splice(deed,1);
                blueColl.splice(deed,1);
                deed -= 1;
                addDots('blue');
            }
        } else {
            if(blueX[deed] < -40*canvas.aPer) {
                blueY.splice(deed,1);
                blueX.splice(deed,1);
                blueXv.splice(deed,1);
                blueColl.splice(deed,1);
                deed -= 1;
                addDots('blue');
            }
        }
    }
}

function drawDots() {
    for(dude = 0;dude < greenX.length;dude++) {
        c.fillStyle = 'rgba(0,225,50,1)';
        c.beginPath();
        rotatepoint(greenX[dude],greenY[dude],deeeeg);
        c.arc(returnX,returnY,40*canvas.aPer,0,2*Math.PI,false);
        c.fill();
        c.closePath();
    }
    for(dude = 0;dude < blueX.length;dude++) {
        c.fillStyle = 'rgba(0,50,225,1)';
        c.beginPath();
        rotatepoint(blueX[dude],blueY[dude],deeeeg);
        c.arc(returnX,returnY,40*canvas.aPer,0,2*Math.PI,false);
        c.fill();
        c.closePath();
    }
}

function dotCollision() {
    for(food = 0;food < greenX.length;food++) {
        if(Math.sqrt((gX - greenX[food])*(gX - greenX[food]) + (gY - greenY[food])*(gY - greenY[food])) < 90*canvas.aPer) {
            greenColl[food] = 1;
        }
    }
    for(food = 0;food < blueX.length;food++) {
        if(Math.sqrt((bX - blueX[food])*(bX - blueX[food]) + (bY - blueY[food])*(bY - blueY[food])) < 90*canvas.aPer) {
            blueColl[food] = 1;
        }
    }
    if(greenColl.includes(1) == true) {
        gameStage = 2;
        for(doop = 0;doop < greenX.length; doop++) {
            if(greenColl[doop] == 1) {
                confColl = doop;
                ecSize = 1;
            }
        }
    } else if(blueColl.includes(1) == true) {
        gameStage = 3;
        for(doop = 0;doop < blueX.length;doop++) {
            if(blueColl[doop] == 1) {
                confColl = doop;
                ecSize = 1;
            }
        }
    }
}

function createScoreBlock() {
    for (i = 0;i < Math.floor(score/50).toString().length;i++) {
        pscore[i] = Math.floor(score/50).toString().charAt(i);
        pscoreX[i] = window.innerWidth*(i + 1)/(Math.floor(score / 50) + 1);
        pscoreY[i] = -75;
        pscoreXv[i] = ((Math.random() * 2) - 1)*15;
        pscoreYv[i] = -6 - (Math.random()*9);
        pscoreDeg[i] = Math.PI*(Math.random() / 4);
        pscoreDegv[i] = Math.PI/180*(Math.random()*16 - 8);
    }
}

function displayGame() {
    c.font = "80px Staatliches";
    c.fillStyle = 'rgba(0,225,75,1)';
    c.strokeStyle = 'rgba(255,255,255,0.6)';
    c.lineWidth = 2;
    c.fillText(Math.floor(score/50),10,70);
    c.strokeText(Math.floor(score/50),10,70);
}

function crossOn(timestamp) {
    //c.clearRect(0,0,window.innerWidth,window.innerHeight);
    c.fillStyle = 'rgba(25,25,40,0.6)';
    c.fillRect(0,0,window.innerWidth,window.innerHeight);
    drawLine(window.innerWidth + 600*canvas.aPer,window.innerHeight + 310*canvas.aPer,window.innerWidth - direcA*window.innerWidth*2.2,window.innerHeight + 310*canvas.aPer,300*canvas.aPer,-30,'butt','rgba(150,150,150,0.01)');
    drawLine(window.innerWidth + 600*canvas.aPer,window.innerHeight,window.innerWidth - direcA*window.innerWidth*5.5,window.innerHeight,300*canvas.aPer,-30,'butt','rgba(150,150,150,0.02)');
    drawLine(window.innerWidth + 600*canvas.aPer,window.innerHeight - 310*canvas.aPer,window.innerWidth - direcA*window.innerWidth*4.7,window.innerHeight - 310*canvas.aPer,300*canvas.aPer,-30,'butt','rgba(150,150,150,0.03)');
    drawLine(window.innerWidth + 600*canvas.aPer,window.innerHeight - 620*canvas.aPer,window.innerWidth - direcA*window.innerWidth*4.0,window.innerHeight - 620*canvas.aPer,300*canvas.aPer,-30,'butt','rgba(150,150,150,0.04)');
    drawLine(window.innerWidth + 600*canvas.aPer,window.innerHeight - 930*canvas.aPer,window.innerWidth - direcA*window.innerWidth*3.2,window.innerHeight - 930*canvas.aPer,300*canvas.aPer,-30,'butt','rgba(150,150,150,0.06)');
    for (xx = 0;xx < crossX.length;xx++) {
        writeText(crossL[xx],crossX[xx],crossY[xx],250*canvas.aPer+"px Staatliches",'rgba(0,100,255,1)',crossDeg[xx],4*canvas.aPer,'rgba(255,255,255,0.5)');
        crossXv[xx] = crossXv[xx]*0.85 + (window.innerWidth*(xx+1)/6 - 250*canvas.aPer/4 - crossX[xx])*0.15;
        crossYv[xx] = crossYv[xx]*0.85 + (window.innerHeight/2 + 250*canvas.aPer/2 - 40*canvas.aPer - crossY[xx])*0.15;
        crossDegv[xx] = crossDegv[xx]*0.9 + (0 - crossDeg[xx])*0.15;
        crossX[xx] = crossX[xx] + crossXv[xx];
        crossY[xx] = crossY[xx] + crossYv[xx];
        crossDeg[xx] = crossDeg[xx] + crossDegv[xx];
    }
    for (xx = 0;xx < pscore.length;xx++) {
        writeText(pscore[xx],pscoreX[xx],pscoreY[xx],100*canvas.aPer+"px Staatliches",'rgba(100,255,150,1)',pscoreDeg[xx],0.01,'rgba(255,255,255,0.5)');
        pscoreXv[xx] = pscoreXv[xx]*0.85 + ((window.innerWidth/2 - (Math.floor(score/50).toString().length)*100*canvas.aPer/4 + xx*100*canvas.aPer/2) - pscoreX[xx])*0.1;
        pscoreYv[xx] = pscoreYv[xx]*0.85 + (window.innerHeight/2 + 100*canvas.aPer/2 + 150*canvas.aPer - pscoreY[xx])*0.1;
        pscoreDegv[xx] = pscoreDegv[xx]*0.9 + (0 - pscoreDeg[xx])*0.1;
        pscoreX[xx] = pscoreX[xx] + pscoreXv[xx];
        pscoreY[xx] = pscoreY[xx] + pscoreYv[xx];
        pscoreDeg[xx] = pscoreDeg[xx] + pscoreDegv[xx];
    }
    
    direcA += (0.3 - direcA)*0.05;

    function whichDoop(mx, my, bx, by, bw, bh) {
        if (mx < bx || mx > bx + bw) {
            return null;
        } else if (my > by - bh && my < by) {
            return 1;
        }
    }

    let instructionsStyle = {
        fontsize: 40*canvas.wPer,
        x: window.innerWidth - 200*canvas.wPer,
        y: window.innerHeight - 10*canvas.hPer,
        color: 'rgba(255,255,255,'+direcA+')',
        thickness: 0.45
    }

    let modeSelectStyle = {
        fontsize: 40*canvas.wPer,
        x: 10*canvas.aPer,
        y: window.innerHeight - 10*canvas.hPer,
        color: 'rgba(255,255,255,'+direcA+')',
        thickness: 0.45
    }

    jeepers = whichDoop(MOUSE_POSITION.x, MOUSE_POSITION.y, instructionsStyle.x - 10*canvas.wPer, instructionsStyle.y + 10, 205*canvas.wPer, instructionsStyle.fontsize*0.8 + 10);
    if (jeepers == 1) {
        instructionsStyle = {
            fontsize: 40*canvas.wPer,
            x: window.innerWidth - 200*canvas.wPer,
            y: window.innerHeight - 10*canvas.hPer,
            color: 'rgba(255,255,255,'+direcA*2+')',
            thickness: 1
        }
    }
    jeepers2 = jeepers;
    jeepers = whichDoop(MOUSE_POSITION.x, MOUSE_POSITION.y, modeSelectStyle.x - 10*canvas.wPer, modeSelectStyle.y + 10, 205*canvas.wPer, modeSelectStyle.fontsize*0.8 + 10);
    if (jeepers == 1) {
        modeSelectStyle = {
            fontsize: 40*canvas.wPer,
            x: 10*canvas.aPer,
            y: window.innerHeight - 10*canvas.hPer,
            color: 'rgba(255,255,255,'+direcA*2+')',
            thickness: 1
        }
    }

    if (Math.sqrt((crossX[0] - window.innerWidth*(1/6) + 62.5*canvas.aPer)*(crossX[0] - window.innerWidth*(1/6) + 62.5*canvas.aPer) + (crossY[0] - window.innerHeight/2 - 85*canvas.aPer)*(crossY[0] - window.innerHeight/2 - 85*canvas.aPer)) < 5) {
        if (Math.sqrt(crossXv[0]*crossXv[0] + crossYv[0]*crossYv[0]) < 0.1) {
            if(bigDoopie[4] == 1 || bigDoopie[0] == 1 || bigDoopie[1] == 1 || bigDoopie[2] == 1 || bigDoopie[3] == 1) {
                gameStage = 5;
            } else if (bigDoopie[5] == 1) {
                gameStage = 6;
                partI = 1;
            } else if (bigDoopie[6] == 1) {
                gameStage = 8;
                partII = 1;
            } else if (getMostRecentMouseClick() !== null) {
                if (jeepers2 == 1) {
                    gameStage = 6;
                    partI = 1;
                } else if (jeepers == 1) {
                    gameStage = 8;
                    partII = 1;
                } else {
                    gameStage = 5;
                }
            }
        }
    }

    writeText("(Arrow key or click)", 520*canvas.wPer, window.innerHeight - 10*canvas.hPer, 40*canvas.wPer+"px Staatliches",'rgba(0,255,255,0)',0,0.45*canvas.aPer,'rgba(255,255,255,'+ direcA +')');
    writeText("Instructions", instructionsStyle.x, instructionsStyle.y, 40*canvas.wPer+"px Staatliches",'rgba(0,255,255,0)',0,instructionsStyle.thickness*canvas.aPer,instructionsStyle.color);
    writeText("Mode Select", modeSelectStyle.x, modeSelectStyle.y, 40*canvas.wPer+"px Staatliches",'rgba(0,255,255,0)',0,modeSelectStyle.thickness*canvas.aPer,modeSelectStyle.color);


}

function crossOff(timestamp) {
    //c.clearRect(0,0,window.innerWidth,window.innerHeight);
    c.fillStyle = 'rgba(25,25,40,0.6)';
    c.fillRect(0,0,window.innerWidth,window.innerHeight);
    drawLine(-400 + Math.pow(direcA,0.9)*1*(window.innerWidth + 600)/0.3,window.innerHeight + 310*canvas.aPer,window.innerWidth - (0.6 - direcA)*window.innerWidth*2.2,window.innerHeight + 310*canvas.aPer,300*canvas.aPer,-30,'butt','rgba(150,150,150,0.01)');
    drawLine(-400 + Math.pow(direcA,0.85)*1.3*(window.innerWidth + 600)/0.3,window.innerHeight,window.innerWidth - (0.6 - direcA)*window.innerWidth*5.5,window.innerHeight,300*canvas.aPer,-30,'butt','rgba(150,150,150,0.02)');
    drawLine(-400 + Math.pow(direcA,0.8)*2*(window.innerWidth + 600)/0.3,window.innerHeight - 310*canvas.aPer,window.innerWidth - (0.6 - direcA)*window.innerWidth*4.7,window.innerHeight - 310*canvas.aPer,300*canvas.aPer,-30,'butt','rgba(150,150,150,0.03)');
    drawLine(-400 + Math.pow(direcA,0.75)*3*(window.innerWidth + 600)/0.3,window.innerHeight - 620*canvas.aPer,window.innerWidth - (0.6 - direcA)*window.innerWidth*4.0,window.innerHeight - 620*canvas.aPer,300*canvas.aPer,-30,'butt','rgba(150,150,150,0.04)');
    drawLine(-400 + Math.pow(direcA,0.7)*4*(window.innerWidth + 600)/0.3,window.innerHeight - 930*canvas.aPer,window.innerWidth - (0.6 - direcA)*window.innerWidth*3.2,window.innerHeight - 930*canvas.aPer,300*canvas.aPer,-30,'butt','rgba(150,150,150,0.06)');
    for (xx = 0;xx < crossX.length;xx++) {
        writeText(crossL[xx],crossX[xx],crossY[xx],250*canvas.aPer+"px Staatliches",'rgba(0,100,255,1)',crossDeg[xx],4*canvas.aPer,'rgba(255,255,255,0.5)');
        crossXv[xx] = (crossX[xx] + 1 - (window.innerWidth*(xx+1)/6 - 250*canvas.aPer/4))* 0.15;
        crossYv[xx] = 0;
        crossDegv[xx] = crossDegv[xx]*0.9 + (0 - crossDeg[xx])*0.15;
        crossX[xx] = crossX[xx] + crossXv[xx];
        crossDeg[xx] = crossDeg[xx] + crossDegv[xx];
    }
    for (xx = 0;xx < pscore.length;xx++) {
        writeText(pscore[xx],pscoreX[xx],pscoreY[xx],100*canvas.aPer+"px Staatliches",'rgba(100,255,150,1)',pscoreDeg[xx],0.01,'rgba(255,255,255,0.5)');
        ddeer = "0."+11^((2*Math.floor(score/50).toString().length - xx)/Math.floor(score/50).toString().length);
        pscoreXv[xx] = (pscoreX[xx] + 6 - (window.innerWidth/2 - (Math.floor(score/50).toString().length)*100*canvas.aPer/4))*ddeer*0.08;
        pscoreYv[xx] = 0;
        pscoreDegv[xx] = pscoreDegv[xx]*0.9 + (0 - pscoreDeg[xx])*0.15;
        pscoreX[xx] = pscoreX[xx] + pscoreXv[xx];
        pscoreDeg[xx] = pscoreDeg[xx] + pscoreDegv[xx];
    }
    if (crossX[0] > window.innerWidth + 250/4*canvas.aPer + 200) {
        if (partI == 0) {
            if (partII == 0) {
                restart();          
            } else {
                partII = 2;
            }
        } else {
            partI = 2;
        }
    }
    direcA += (0 - direcA)*0.1;
    writeText("(Arrow key or click)", 520*canvas.wPer, window.innerHeight - 10*canvas.aPer, 40*canvas.wPer+"px Staatliches",'rgba(0,255,255,0)',0,0.45*canvas.aPer,'rgba(255,255,255,'+ direcA +')');
    writeText("Instructions", window.innerWidth - 200*canvas.wPer, window.innerHeight - 10*canvas.hPer, 40*canvas.wPer+"px Staatliches",'rgba(0,255,255,0)',0,0.45*canvas.aPer,'rgba(255,255,255,'+ direcA +')');
    writeText("Mode Select", 10*canvas.aPer, window.innerHeight - 10*canvas.hPer, 40*canvas.wPer+"px Staatliches",'rgba(0,255,255,0)',0,0.45*canvas.aPer,'rgba(255,255,255,'+ direcA +')');
}

function instructionsOn() {
    c.fillStyle = 'rgba(25,25,40,0.8)';
    c.fillRect(0,0,window.innerWidth,window.innerHeight);
    writeText("Instructions", (250 + instX)*canvas.wPer, 150*canvas.hPer,175*canvas.wPer+"px Staatliches",'rgba(25,25,40,0)',0,4*canvas.aPer,'rgba(0,75,255,'+instA+')');
    writeText("Use the arrow keys to move the center dots.", (70 + instX)*canvas.wPer, 335*canvas.hPer,75*canvas.wPer+"px Staatliches",'rgba(0,100,255,0)',0,1*canvas.aPer,'rgba(255,255,255,'+instA+')');
    writeText("The center dots cannot touch their corresponding color.", (140 + instX)*canvas.wPer, 440*canvas.hPer,50*canvas.wPer+"px Staatliches",'rgba(0,75,225,0)',0,0.7*canvas.aPer,'rgba(255,255,255,'+instA+')');
    writeText("The blue center dot can touch green, but not blue. It's the opposite with green.", (95 + instX)*canvas.wPer, 540*canvas.hPer,40*canvas.wPer+"px Staatliches",'rgba(0,75,225,0)',0,0.7*canvas.aPer,'rgba(255,255,255,'+instA+')');
    writeText("('SPACE' or click)", 10*canvas.aPer, window.innerHeight - 10*canvas.aPer, 30*canvas.aPer+"px Staatliches",'rgba(0,150,175,0)',0,0.8,'rgba(255,255,255,'+ instA*0.3 +')');
    if (bigDoopie[4] == 1 || getMostRecentMouseClick() !== null) {
        if (instX > -1) {
            gameStage = 7;
        }
    }
    instA += (1 - instA)*0.05;
    instX += (0 - instX)*0.15;
}

function instructionsOff() {
    c.fillStyle = 'rgba(25,25,40,0.8)';
    c.fillRect(0,0,window.innerWidth,window.innerHeight);
    writeText("Instructions", (250 + instX)*canvas.wPer, 150*canvas.hPer,175*canvas.wPer+"px Staatliches",'rgba(25,25,40,0)',0,4*canvas.aPer,'rgba(0,75,255,'+instA+')');
    writeText("Use the arrow keys to move the center dots.", (70 + instX)*canvas.wPer, 335*canvas.hPer,75*canvas.wPer+"px Staatliches",'rgba(0,100,255,0)',0,1*canvas.aPer,'rgba(255,255,255,'+instA+')');
    writeText("The center dots cannot touch their corresponding color.", (140 + instX)*canvas.wPer, 440*canvas.hPer,50*canvas.wPer+"px Staatliches",'rgba(0,75,225,0)',0,0.7*canvas.aPer,'rgba(255,255,255,'+instA+')');
    writeText("The blue center dot can touch green, but not blue. It's the opposite with green.", (95 + instX)*canvas.wPer, 540*canvas.hPer,40*canvas.wPer+"px Staatliches",'rgba(0,75,225,0)',0,0.7*canvas.aPer,'rgba(255,255,255,'+instA+')');
    writeText("('SPACE' or click)", 10*canvas.aPer, window.innerHeight - 10*canvas.aPer, 30*canvas.aPer+"px Staatliches",'rgba(0,150,175,0)',0,0.8,'rgba(255,255,255,'+ instA*0.3 +')');
    if (instX > window.innerWidth) {
        restart();
        gameStage = 4;
        partI = 0;
    }
    instA += (0 - instA)*0.05;
    instX += (instX + 1)*0.3;
}

function modeSelectOn() {
    c.fillStyle = 'rgba(25,25,40,0.8)';
    c.fillRect(0,0,window.innerWidth,window.innerHeight);

    function whichArea(x, y) {
        let xStart = (50 + instX) * canvas.wPer;
        let xEnd = window.innerWidth * .45;

        if (xStart > x || x > xEnd)
            return null;

        if (y < easy.y && y > easy.y - fontSize*0.75) {
            return 'easy';
        } else if (y < normal.y && y > normal.y - fontSize*0.75) {
            return 'normal';
        } else if (y < impossible.y && y > impossible.y - fontSize*0.75) {
            return 'impossible';
        }
        return null;
    }

    let fontSize = 126 * canvas.aPer;
    let easy = {
        y: 320 * canvas.hPer,
        color: 'rgba(200,200,200,'+instA+')',
        width: 1
    }
    let normal = {
        y: 450 * canvas.hPer,
        color: 'rgba(200,200,200,'+instA+')',
        width: 1
    }
    let impossible = {
        y: 580 * canvas.hPer,
        color: 'rgba(200,200,200,'+instA+')',
        width: 1
    }
    let { x, y } = MOUSE_POSITION;
    let area = whichArea(x, y);

    if (area === 'easy') {
        easy.color = 'rgba(255,255,255,'+instA+')';
        easy.width = 1.5;
    } else if (area === 'normal') {
        normal.color = 'rgba(255,255,255,'+instA+')';
        normal.width = 1.5;
    } else if (area === 'impossible') {
        impossible.color = 'rgba(255,255,255,'+instA+')';
        impossible.width = 1.5;
    }

    writeText("Select Mode", (275 + instX)*canvas.wPer, 150*canvas.aPer,175*canvas.wPer+"px Staatliches",'rgba(25,25,40,0)',0,4*canvas.aPer,'rgba(0,75,255,'+instA+')');
    writeText("EASY", (50 + instX)*canvas.wPer, easy.y,127*canvas.aPer+"px Staatliches",'rgba(0,100,255,0)',0,easy.width*canvas.aPer, easy.color);
    writeText("NORMAL", (50 + instX)*canvas.wPer, normal.y,126*canvas.aPer+"px Staatliches",'rgba(0,75,225,0)',0,normal.width*canvas.aPer, normal.color);
    writeText("IMPOSSIBLE", (50 + instX)*canvas.wPer, impossible.y,125*canvas.aPer+"px Staatliches",'rgba(0,75,225,0)',0,impossible.width*canvas.aPer, impossible.color);

    let click = getMostRecentMouseClick();
    if (click !== null) {
        click = whichArea(click.x, click.y);
    }

    if (instX > -1) {
        if (bigDoopie[7] == 1 || click === 'easy') {
            gameStage = 9;
            gameDiff = 1;
        }
        if (bigDoopie[8] == 1 || click === 'normal') {
            gameStage = 9;
            gameDiff = 2;
        }
        if (bigDoopie[9] == 1 || click === 'impossible') {
            gameStage = 9;
            gameDiff = 3;
        }
    }
    instA += (1 - instA)*0.05;
    instX += (0 - instX)*0.15;

}

function modeSelectOff() {
    c.fillStyle = 'rgba(25,25,40,0.8)';
    c.fillRect(0,0,window.innerWidth,window.innerHeight);
    writeText("Select Mode", (275 + instX)*canvas.wPer, 150*canvas.aPer,175*canvas.wPer+"px Staatliches",'rgba(25,25,40,0)',0,4*canvas.aPer,'rgba(0,75,255,'+instA+')');
    if (gameDiff == 1) {
        writeText("EASY", (50 + instX)*canvas.wPer, 320*canvas.hPer,127*canvas.aPer+"px Staatliches",'rgba(0,100,255,0)',0,1.5*canvas.aPer,'rgba(255,255,255,1)');
    } else {
        writeText("EASY", (50 + instX)*canvas.wPer, 320*canvas.hPer,127*canvas.aPer+"px Staatliches",'rgba(0,100,255,0)',0,1*canvas.aPer,'rgba(255,255,255,'+instA+')');
    }
    if (gameDiff == 2) {
        writeText("NORMAL", (50 + instX)*canvas.wPer, 450*canvas.hPer,126*canvas.aPer+"px Staatliches",'rgba(0,75,225,0)',0,1.5*canvas.aPer,'rgba(255,255,255,1)');
    } else {
        writeText("NORMAL", (50 + instX)*canvas.wPer, 450*canvas.hPer,126*canvas.aPer+"px Staatliches",'rgba(0,75,225,0)',0,1*canvas.aPer,'rgba(255,255,255,'+instA+')');
    }
    if (gameDiff == 3) {
        writeText("IMPOSSIBLE", (50 + instX)*canvas.wPer, 580*canvas.hPer,125*canvas.aPer+"px Staatliches",'rgba(0,75,225,0)',0,1.5*canvas.aPer,'rgba(255,255,255,1)');
    } else {
        writeText("IMPOSSIBLE", (50 + instX)*canvas.wPer, 580*canvas.hPer,125*canvas.aPer+"px Staatliches",'rgba(0,75,225,0)',0,1*canvas.aPer,'rgba(255,255,255,'+instA+')');
    }
    if (instX > window.innerWidth) {
        restart();
        gameStage = 4;
        partI = 0;
    }
    instA += (0 - instA)*0.15;
    instX += (instX + 1)*0.25;
}

/*let names = ['billy', 'bob', 'joe', 'rob', 'arjun', 'nolan', 'hi'];
// name = names[ Math.floor(names.length * Math.random()) ];
name = prompt('Enter a name');
console.log(name);
let leaderboard = new Leaderboard();
let cloudVariables = new CloudVariables('ws://10.210.19.20:8080/api/ws', name);*/

function animate(timestamp) {
    if(gameStage == 1) {
        c.clearRect(0,0,window.innerWidth,window.innerHeight);
        background();
        updatePlayer();
        updateDots();
        drawDots();
        dotCollision();
        drawPlayer();
        displayGame();
        score = 150*(timestamp - myTimer)/3500;
        gameSpeedH = Math.floor(score/50);
        // cloudVariables.sendScore(gameSpeedH, gameDiff);
        if (gameDiff == 1) {
            gameSpeedH = gameSpeedH/2;
            if(gameSpeedH > 50) {
                gameSpeedH = 50;
            }
        } else if (gameDiff == 2) {
            if(gameSpeedH > 50) {
                gameSpeedH = 50;
            }
        } else if (gameDiff == 3) {
            gameSpeedH = 50;
        }
        gameSpeed = (2*Math.sin(gameSpeedH*Math.PI/50 - Math.PI/2) + 7)*(window.performance.now() + 0.01 - lastTime)/23*window.innerWidth/1200;
        // gameSpeed = .1;
        lastTime = window.performance.now();
        
        /*if (cloudVariables.areChanges()) {
            leaderboard.setLeaderboard(cloudVariables.getGameDetails(gameDiff));
        }
        leaderboard.draw(c, window.innerWidth - 245, 20);*/
    }
    if(gameStage == 2) {
        drawArc(greenX[confColl],greenY[confColl],ecSize*6^((ecSize+150)/150),0,2*Math.PI,'rgba(20,20,30,0.8)');
        drawArc(greenX[confColl],greenY[confColl],ecSize*4^((ecSize+150)/150),0,2*Math.PI,'rgba(25,25,38,0.8)');
        drawArc(greenX[confColl],greenY[confColl],ecSize*2^((ecSize+150)/150),0,2*Math.PI,'rgba(30,30,50,1)');
        ecSize = ecSize*1.3;
        if(ecSize*(2^((ecSize+150)/150)) > canvas.diag) {
            c.clearRect(0,0,window.innerWidth,window.innerHeight);
            c.fillStyle = 'rgba(5,5,25,0.9)';
            c.fillRect(0,0,window.innerWidth,window.innerHeight);
            createScoreBlock();
            getMostRecentMouseClick();
            gameStage = 4;
            //cloudVariables.endGame();
        }
    }
    if(gameStage == 3) {
        if(ecSize*(2^((ecSize+150)/150)) < canvas.diag) {
            drawArc(blueX[confColl],blueY[confColl],ecSize*6^((ecSize+150)/150),0,2*Math.PI,'rgba(20,20,30,0.8)');
            drawArc(blueX[confColl],blueY[confColl],ecSize*4^((ecSize+150)/150),0,2*Math.PI,'rgba(25,25,38,0.8)');
            drawArc(blueX[confColl],blueY[confColl],ecSize*2^((ecSize+150)/150),0,2*Math.PI,'rgba(30,30,50,1)');
            ecSize = ecSize*1.3;
        } else {
            c.clearRect(0,0,window.innerWidth,window.innerHeight);
            c.fillStyle = 'rgba(5,5,25,0.9)';
            c.fillRect(0,0,window.innerWidth,window.innerHeight);
            createScoreBlock();
            getMostRecentMouseClick();
            gameStage = 4;
            //cloudVariables.endGame();
        }
    }
    if(gameStage == 4) {
        crossOn();
    }
    if (gameStage == 5) {
        crossOff();
    }
    if (gameStage == 6) {
        if (partI == 1) {
            crossOff();
        } else {
            instructionsOn();
        }
    }
    if (gameStage == 7) {
        instructionsOff();
    }
    if (gameStage == 8) {
        if (partII == 1) {
            crossOff();
        } else {
            modeSelectOn();
        }
    }
    if (gameStage == 9) {
        modeSelectOff();
    }
    requestAnimationFrame(animate);
}

init();
requestAnimationFrame(animate);

