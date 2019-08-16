// 목표 : 작은 정보를 local storage에 저장해보자.
// form변수에 class인 js-form을 지정하자. 그리고 input변수에는 input 태그를 지정하자.
const form = document.querySelector(".js-form"),
    input = form.querySelector("input");

// 부연설명) querySelector는 찾은 1번쨰것을 가져옴
// 부연설명2)querySelectorAll은 모든걸가져온다.클래스명에 따른 엘리먼트가져옴. 배열을줌. 그러나 하나의 클래스명이라도 배열을 줘야해서 귀찮음

// greeting벼눗에는 class인 js-greetings를 지정하자.
const greeting = document.querySelector(".js-greetings"); // h4태그, paintGreeting함수에서 활용

// localStorage를 의미하는 USER_LS변수에 currentUser를 쓰자. SHOWING_CN변수에 showing을 쓰자.
const USER_LS = "currentUser", // correntUser이 의미하는건무엇인가?
    SHOWING_CN = "showing"; // showing이 의미하는건무엇인가? paintGreeting함수에서 사용

// paintGreeting함수를 선언하자. 인자는 text
// paintGreeting함수는 localStorage에 유저가 null인 경우에 사용할 함수
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);// 텍스트를 색칠하려면 폼을 숨겨야하므로.
    greeting.classList.add(SHOWING_CN); // h4태그
    greeting.innerText = `Hello ${text}`; // h4태그
}

// 브라우저의 개발자도구에서 보았던 local Storage에서 키,값을 가져오는 함수를 만들것이다.
// loadName함수를 만든다.
function loadName(){ 
    const currentUser = localStorage.getItem(USER_LS); // USER_LS가 키 인듯
    if (currentUser === null) { // localStorage의 유저가 null(텍스트임)인 경우
    } else { // localStorage에 유저가 있다면. null이 아닌 경우
        paintGreeting(currentUser); // 로컬스토리지에서 가져온 텍스트와 함께 paintGreeting함수를 호출하여 색칠할거임
    }
}

function init() {

}

init();