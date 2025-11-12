class Obj {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.img = new Image();
        this.img.src = color;
    }

    desenha() {
        pincel.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    animation(name) {
        this.timer++;
        if (this.timer > 10) {
            this.timer = 0;
            this.frame++;
            if (this.frame > 4) this.frame = 1;
            const newSrc = `img/${name}${this.frame}.png`;
            if (this.img.src !== newSrc) this.img.src = newSrc;
        }
    }
}
 class Abelha extends Obj{
    dir=0;
    lifes= 3;
    move(){
        this.x += this.dir;
        if (this.x < 0) this.x = 0;
        if (this.x + this.width > 900) this.x = 900 - this.width;
    }

    collide(obj){
        if(this.x < obj.x + obj.width &&
            this.x + this.width > obj.x &&
            this.y <obj.y + obj.height &&
            this.y + this.height > obj.y
        ){
            return true;
        } else{
            return false;
        }
    }
 }

 class Aranha extends Obj{
    move(){
        this.y +=2;
        if(this.y> 900){
            this.y = -50;
            this.x = Math.random() * (400 - 0);
        }
    }
    mudaPosicao(){
        this.y = -50;
        this.x = Math.random() * (600 - 0);
    }
 }

 class Bg extends Obj{
    move(speed, limit,pos){
        this.y +=speed;
        if(this.y > limit){
            this.y = pos;
        }
    }
 }

 class Flor extends Aranha{
    cont = 0;
    mudaPosicao(){
        this.y = -50;
        this.x = Math.random() * (600 - 0);
    }
 }

 class Text{
    draw(texto,x,y){
        pincel.font = "20px Arial";
        pincel.fillStyle = "white";
        pincel.fillText(texto,x,y);
    }
 }
 class TextVD{
        draw(texto,x,y){
            pincel.font = "50px Arial";
            pincel.fillStyle = "black";
            pincel.fillText(texto,x,y);
        }
    }