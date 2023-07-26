function changeText() {
    let textList = ['textA','textB','textC','textD','textE'];
    let randomNumber = getRandomNumber(0,textList.length - 1);
    document.getElementById("header").innerHTML = textList[randomNumber];
}

function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min *1)+min);
}