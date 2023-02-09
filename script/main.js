let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/tu1.png') {
      myImage.setAttribute('src', 'images/tu2.png');
    } else {
      myImage.setAttribute('src', 'images/tu1.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('请输入你的名字。');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'mob和神树欢迎你的到来!' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'mob和神树欢迎你的到来!' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
