const student = {
  name: "황정화",
  age: 82,
  grade: 1,
  major: "패디과",
  1: "귀엽다",
  상태: "마이아파",
  //   fn: function () {
  fn() {
    return this.name + "ddddd" + this["상태"] + this;
  },
  arr: () => {
    console.log(this);
  },
};
console.log(student.fn());
student.arr();
// 접근방법1: 점표기법
console.log(student.name);
//접근방법2:대괄호 표기법
console.log(student["1"]);
console.log(student["상태"]);

/* 객체의 속성다루기 */
const user = {
  id: 1,
  username: "mango",
};
// 추가
user.email = "angun1546@gmail.com";
console.log("email" in user);
// 삭제
delete user.id;
console.log("id" in user);

// 모든 키 가져오기
console.log(Object.keys(student));
