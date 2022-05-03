window.onload = function(){
   
    move();


}

function move(){
    dvd = document.getElementById('dvd');

    var posY = 100;
    var posX = 100;
    var moveY = 2;
    var moveX = 4;

    dvd.style.top = posY + 'px';
    dvd.style.left = posX + 'px';

    limB = window.innerHeight - 100;
    limT = 0;
    limL = 0;
    limR = window.innerWidth - 100;

    id = setInterval(frame, 10);
    
    var dir = '';
    
    function frame(){
        switch(dir){
            case 'br': posY += moveY; posX += moveX;
                break;
            case 'bl': posY += moveY; posX -= moveX;
                break;
            case 'tr': posY -= moveY; posX += moveX;
                break;
            case 'tl': posY -= moveY; posX -= moveX;
                break;
            case '': dir = 'br';
                break;
        }

        dvd.style.top = posY + 'px';
        dvd.style.left = posX + 'px';
        
        // oben

        if(posY <= limT && dir == 'tl'){
            dir = 'bl'; changeColor();
        }
        else if(posY <= limT && dir == 'tr'){
            dir = 'br'; changeColor();
        }

        // unten
        if(posY >= limB && dir == 'br'){
            dir = 'tr'; changeColor();
        } 
        else if (posY >= limB && dir == 'bl'){
            dir = 'tl'; changeColor();
        }

        // links
        if(posX <= limL && dir == 'tl'){
            dir = 'tr'; changeColor();
        }
        else if(posX <= limL && dir == 'bl'){
            dir = 'br'; changeColor();
        }

        // rechts
        if(posX >= limR && dir == 'tr'){
            dir = 'tl'; changeColor();
        }
        else if(posX >= limR && dir == 'br'){
            dir = 'bl'; changeColor();
        }

    }

    function changeColor(){
        var colors = ["green", "blue", "pink", "white", "orange", "lightgreen", "#bc8ce4"];
        var num = Math.floor(Math.random() * 7);
        dvd.style.borderColor = colors[num];
    }
}
