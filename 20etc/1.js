//let,const
let age; //undefinded
age = 20; //값의 재할당
console.log(age);

//const name; //재할당 불가
const name = "지각쟁이 튀어나와라";
const arr = [1, 35, 6];
arr.push(4);
console.log(arr);

//systan sugar(문법설탕:축약표현)
//arrow function

//1
{
  function add1(a, b) {
    return a + b;
  }
  console.log(add1(1, 2));

  //2
  const add2 = (a, b) => {
    return a + b;
  };

  //3
  const add3 = (a, b) => {
    return a + b;
  };
}
const add4 = (a, b) => a + b;
//매변 1
const add5 = (a) => a * 2;
const add6 = () => 2;

//화살표함수의 this
{
  const user = {
    name: "지각쟁이튀어나와라",
    sayHi1: function () {
      console.log(`돌아와요부산항에${this.name}입니다.`);
    },
    sayHi2() {
      console.log(`돌아와요부산항에${this.name}입니다.`);
    },
  };
  user.sayHi1();
  user.sayHi2();
}

const user = {
  name: "철수",
  age: 20,
  job: "개발자",
};
/* const { name, age, job } = user; */
const { name: userName, age: userAge, job: userJob } = user;
const { name: uName, city = "미정" } = user;
/* console.log(Name, city, userAge); */

//let name=user.name
//let age=user.age
//let job=user.job

//배열의 구조분해
{
  const arr = [1, 2, 3, 4, 5];
  const one = arr[0];
  const two = arr[1];
  console.log(one, two);
  const [a, b] = arr;
  console.log(a, b);
  const [d, , f] = arr;
  console.log(d, f);
  const [g, ...rest] = arr;
  console.log(rest);
}

//함수의 구조분해
{
  const user = {
    age: 20,
    name: "안건",
    address: "일산",
  };
  function greet1(a) {
    console.log(`hi안건a.name`);
  }
  greet1(user);
  function greet2({ age, address, name }) {
    console.log(`hi${name}! 너는${age}살이구나 너${address}살지?`);
  }
  greet2(user);
}

//map 배열의 순회해서 새 배열로 반환
{
  const nums = [1, 2, 3];
  const double = nums.map((a) => a * 2);
  const user = [
    { id: 1, name: "안건" },
    { id: 2, name: "지민" },
    { id: 3, name: "태림" },
    { id: 4, name: "성민" },
  ];
  const names = user.map((u) => u.name);
  console.log(names);
  const items = nums.map((n) => `<div>${n}</div>`);
  console.log(items);
}

//forEach
{
  const nums = [1, 2, 3];
  const double = nums.map((n) => n * 2);
  console.log(double);
  nums.forEach((n) => console.log(n * 2));
}

//filter
{
    const
}
//find

//module
export const add = (a, b) => {
  return a + b;
};

import add from "경로명";
