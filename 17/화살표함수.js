// 익명함수, 표현식함수
const hi = function (a) {
  return console.log(`${a}님 안녕하세요`);
};
hi("망고");
// 화살표함수(람다함수)
const hii = (a) => {
  return console.log(`${a}님 안녕하세요`);
};
hii("봄동이");

const hiii = () => console.log(`봄동님 안녕하세요`);

hiii();

