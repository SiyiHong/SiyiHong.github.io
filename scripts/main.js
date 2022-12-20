let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lgy.jpeg') {
      myImage.setAttribute('src', 'images/lgy2.jpeg');
    } else {
      myImage.setAttribute('src', 'images/lgy.jpeg');
    }
}

let myButton = document.querySelector('button');/*选中一个element*/
let myHeading = document.querySelector('h1');

//设置名字函数
function setUserName() {
    let myName = prompt('Enter your Nave');
    localStorage.setItem('name', myName);/*设置本地存储*/
    myHeading.textContent = 'Hello,' + myName;
}

myButton.onclick = function() {
    setUserName();
}