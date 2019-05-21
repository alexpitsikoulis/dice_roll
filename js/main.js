function rollDice() {
    var reset = document.getElementsByTagName('div')[0];
    reset.removeChild(reset.childNodes[0]);
    var sides = document.getElementsByTagName('select')[0].value;
    var num = Math.random()*sides;
    var dice = Math.ceil(num);
    var result = document.createElement('p');
    result.innerHTML = dice;
    document.getElementsByTagName('div')[0].appendChild(result);
};
var button = document.getElementsByTagName('button')[0];
button.addEventListener('click', rollDice);
