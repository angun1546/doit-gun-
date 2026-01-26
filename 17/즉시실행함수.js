// 즉시실행함수: 딱 한번만 실행되고 종료
// 매개변수가 없을때
//(function(){})()

(function () {
  console.log("123");
})();

(function (a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
})(1, "a", 5);
