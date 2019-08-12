const clockContainer = document.querySelector(".js-clock"), // 해당엘리먼트의 자식태그탐색
clockTItle = clockContainer.querySelector("h1");

function getTime() { // 현재시각얻기
    const date = new Date(); // 내장함수 객체
    const min = date.getMinutes(); // getTime함수를 활용
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTItle.innerText = `${hours} : ${min} : ${seconds}`; // 현재 00:00으로 되어있는 h1태그의 컨텐츠를 바꿀것
}

// 위에서 작성한 getTIme함수 호출
function init() {
    getTime();
}