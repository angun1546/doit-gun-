// 지정시간 이후에 실행
//setTimeout(함수,시간)
let setT = setTimeout(() => console.log("🎈"), 3000);
//setTimeout 취소
clearTimeout(setT);
let stop = setInterval(function () {
  console.log("🎈");
}, 500);
clearInterval(stop)