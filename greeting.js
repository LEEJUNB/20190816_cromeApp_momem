// 작은 정보를 local storage에 저장해보자.
const form = document.querySelector("js-form"),
    input = form.querySelector("input");
// querySelector는 찾은 1번쨰것을 가져옴
// querySelectorAll은 모든걸가져온다.클래스명에 따른 엘리먼트가져옴. 배열을줌. 그러나 하나의 클래스명이라더 배열을 줘서 귀찮음

const greeting = document.querySelector(".js-greetings"); // h4태그, paintGreeting함수에서 활용

// localStorage를 의미
const USER_LS = "currentUser",
    SHOWING_CN = "showing"; // paintGreeting함수에서 사용

// paintGreeting함수는 localStorage에 유저가 null인 경우에 사용할 함수
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);// 텍스트를 색칠하려면 폼을 숨겨야하므로.
    greeting.classList.add(SHOWING_CN); // h4태그
    greeting.innerText = `Hello ${text}`; // h4태그
}

// 앞서 보았던 local Storage에서 키,값을 가져오는 함수를 만들것이다.
function loadName(){ 
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) { // localStorage의 유저가 null(텍스트임)인 경우
    } else { // localStorage에 유저가 있다면.
        paintGreeting(currentUser); // 로컬스토리지에서 가져온 텍스트와 함께 paintGreeting함수를 호출
    }
}

function init() {

}

init();