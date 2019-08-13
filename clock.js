const clockContainer = document.querySelector(".js-clock"), 
clockTitle = clockContainer.querySelector("h1"); // clockContainer의 자식태그인 h1태그를 탐색

function getTime() { // 현재시각얻는 함수
    const date = new Date(); // 내장함수 객체
    const min = date.getMinutes(); // getTime함수를 활용
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours} : ${min < 10 ? `0${min}` : min} : ${seconds < 10 ? `0${seconds}` : seconds}`; // 현재 00:00으로 되어있는 h1태그의 컨텐츠를 바꿀것
    //2.삼항연산자를 이용해서 초단위에서 10초 이하인경우 십의자리에 0을 붙여서 01 02 03 .. 으로 만들기. ?는 if와 같다
}

// 위에서 작성한 getTime함수 호출
function init() {
    getTime();
    setInterval(getTime, 1000); // 1초 단위로 새로고침
}

init(); // init()함수 실행