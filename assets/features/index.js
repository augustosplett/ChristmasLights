var content = `
<div class="lamp">
<div class="wire"></div>   
<div class="socket"></div>
<div class="bulb pisca"></div>
<br>COLOR: <input type="color" onchange="changeColor(this)">
</div>
`;

function changeColor(element){
    const color = element.value;
    const parent = element.parentNode;
    const bulb = parent.querySelector('.bulb');
    bulb.style.backgroundColor = color;
}
function monta(){
    var body = document.querySelector("body");
    const lampadas = criaLampadas()
    body.innerHTML = lampadas;
    coresIniciais();
}

function criaLampadas(){
    var i;
    var lampadas = '';
    for(i=1;i<=7;i++){
        lampadas = lampadas + content;
    } 
    return lampadas
}  

function coresIniciais(){
    var body = document.querySelector("body");
    var numElementos = body.childElementCount;
    var i;
    for(i=0;i<=numElementos;i++){
        const colorSelector = body.children[i].querySelector('input');
        const lamp = body.children[i].querySelector('.bulb');
        const color = getRandomColor();
        colorSelector.value = color;
        lamp.style.backgroundColor = color;
    }
}

//font:https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
  