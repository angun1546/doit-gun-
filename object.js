const student = {
  name: "황정화",
  age: 82,
  grade: 1,
  major: "패디과",
  "1": "귀엽다",
  "상태":"마이아파"
};
// 접근방법1: 점표기법
console.log(student.name);
//접근방법2:대괄호 표기법
console.log(student["1"]);
console.log(student["상태"]);
