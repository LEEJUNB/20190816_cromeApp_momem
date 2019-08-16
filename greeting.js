// 목표 : 작은 정보를 local storage에 저장해보자.
// form변수에 class인 js-form을 지정하자. 그리고 input변수에는 input 태그를 지정하자.
const form = document.querySelector(".js-form"),
    input = form.querySelector("input");

/// 3. 값을 저장하는 함수
function saveName(text) {
    localStorage.setItem(USER_LS, text);
}


/// 2.이벤트의 기본값이 새로고침을 막는 함수. submit을 눌렀을때 작동
function hadleSubmit(event){
    event.preventDefault(); // 보통이벤트가 발생하면 root, form에서 일어남. input창에 값입력후 enter누르면 페이지 새로고침이 일어나는데 이 기본값을 막는것이 이것.
    const currentValue = input.value; // input한 value값을 의미
    paintGreeting(currentValue); // paintGreeting의 인자가 text.
    saveName(currentValue);// '3'에서 작성함 함수를 쓰서 이름도 저장하자.
}

/// 1.loadName함수에서 user이름을 요청받을 함수
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",hadleSubmit);
}


// greeting벼눗에는 class인 js-greetings를 지정하자.
const greeting = document.querySelector(".js-greetings"); // h4태그, paintGreeting함수에서 활용

// localStorage를 의미하는 USER_LS변수에 currentUser를 쓰자. SHOWING_CN변수에 showing을 쓰자.
const USER_LS = "currentUser", // correntUser이 의미하는건무엇인가?
    SHOWING_CN = "showing"; // showing이 의미하는건무엇인가? paintGreeting함수에서 사용

// paintGreeting함수를 선언하자. 인자는 text
// paintGreeting함수는 localStorage에 유저가 null인 경우에 사용할 함수
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);// form을 지움
    greeting.classList.add(SHOWING_CN); // greeting을 보여줌
    greeting.innerText = `Hello ${text}`; // 전송한 텍스트를 삽입
}

// 개발자도구에서 보았던 local Storage에서 키,값을 가져오는 함수를 만들것이다.
// loadName함수를 만든다.
function loadName(){ 
    const currentUser = localStorage.getItem(USER_LS); // USER_LS가 키 인듯
    if (currentUser === null) { // localStorage의 유저가 null(텍스트임)인 경우, user이름을 요청할거임
        askForName();
    } else { // localStorage에 유저가 있다면. null이 아닌 경우
        paintGreeting(currentUser); // 로컬스토리지에서 가져온 텍스트와 함께 paintGreeting함수를 호출하여 색칠할거임
    }
}

function init() {

}

init();