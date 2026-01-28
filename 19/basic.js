const id = document.getElementById("one");
id.style.color = "pink";
const cla = document.getElementsByClassName("highlight");
console.log(id, cla);

//cla[0].style.backgroundColor='yellow';
cla[0].style.cssText = `width:500px; margin:20px; background-color:yellow; font-size:3em`;

const tag = document.getElementsByClassName("li");
console.log(tag);

for (let i = 0; i < tag.length; i++) {
  tag[i].style.borderBottom = "2px solid red";
}

/* tag.forEach((el)=>{el.style.borderTop ="2px solid red";}); */

const hi = document.querySelector("p.highlight");
console.log(hi);
hi.style.backgroundColor = "pink";

const uls = document.querySelectorAll("ul");
console.log(uls);
uls.forEach((a, b, c) => {
  a.style.border = "black 5px dashed";
  a.classList.add("list");
});
