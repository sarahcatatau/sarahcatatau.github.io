const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

var abelha= new Abelha(350,550,100,100,"img/bee1.png");
var aranha = new Aranha(100,100,100,100,"img/spider1.png");
var flor = new Flor(0,0,50,50, "img/flower1.png");
var bg = new Bg(0,0,900,720,"img/bg.png");
var bg2 = new Bg(0,-720,900,720,"img/bg.png");

var florescont = new Text();
var placar = new Text();
var perdeu = new TextVD();
var vitoria = new TextVD();
var somTocando = false;
var startTime = Date.now();       
var elapsedSeconds = 0;

var play= true;
var venceu = false;

const somFlor = new Audio("som/coletaFlor.mp3");
const somAranha = new Audio("som/colisaoAranha.mp3");
const somGameOver = new Audio("som/gameOver.mp3");

document.addEventListener("keydown", function(event){
    if(event.key === "d"){
        abelha.dir =3;
    }
    
    if(event.key === "a"){
        abelha.dir =-3;
    }
});
document.addEventListener("keyup", function(event){
    if(event.key === "d"){
        abelha.dir =0;
    }
    
    if(event.key === "a"){
        abelha.dir=0;
    }
});
function collides(){
    if(abelha.collide(aranha)){
        aranha.mudaPosicao();
        abelha.lifes -=1;
        somAranha.currentTime = 0;
        somAranha.play();
    }
    if( abelha.collide(flor)){
        flor.mudaPosicao();
        flor.cont +=1;
        somFlor.currentTime = 0;
        somFlor.play();
    }
}
function gameover(){
    if(abelha.lifes <= 0){
        play = false;
         somGameOver.play();
    }
}
function win(){
    if(flor.cont >= 5){
        play = false; 
        venceu = true;
    }
}
function floresContagem(){
    if(flor.cont >=5){
        florescont.draw("Slayyy",40,50);
        venceu= true;
    }
}
function draw(){
    bg.desenha();
    bg2.desenha();
    if(play){
    abelha.desenha();
    aranha.desenha();
    flor.desenha();
    placar.draw("Vida: "+ abelha.lifes,40,100);
    florescont.draw("Flores:" + flor.cont + "/5",40,50);
    var remaining = Math.max(0, 60 - elapsedSeconds);
        var mm = String(Math.floor(remaining/60)).padStart(2, '0');
        var ss = String(remaining % 60).padStart(2, '0');
        placar.draw("Tempo: " + mm + ":" + ss, 740, 50);
    } else {
        if(venceu){
            vitoria.draw("Você venceu!", 300, 450)
        } else{
        perdeu.draw("GameOver", 300, 450);
        }
    }
}
function update(){
    if(play){
        elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
        if(elapsedSeconds >= 60 && flor.cont < 5){
            play = false;
        }

    abelha.move();
    abelha.animation("Bee");
    abelha.collide(aranha);
    aranha.move();
    aranha.animation("spider");
    flor.move();
    collides();
    gameover();
    floresContagem();
    bg.move(6,720,0);
    bg2.move(6,0,-720);
    }
    if(venceu){
        win();
    }
}

function main(){
    pincel.clearRect(0,0,900,720);
    update();
    draw();
}

setInterval(main,10);