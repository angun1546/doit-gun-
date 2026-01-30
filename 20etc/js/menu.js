/* ====================================  */
/* === nav ===========================  */
/* ====================================  */
const nav = document.querySelector("nav");
const dep1 = nav.querySelectorAll(".dep1");
// mouse진입시 메뉴열기
dep1.forEach((el) => {
  const row = el.querySelector(".row");
  const mega = el.querySelector(".mega");
  el.addEventListener("mouseenter", () => {
    el.classList.add("on");
    const h = row.offsetHeight;
    mega.style.height = `${h}px`;
  });
  el.addEventListener("mouseleave", () => {
    el.classList.remove("on");
    const h = row.offsetHeight;
    mega.style.height = `0px`;
  });
});

//스크롤 이벤트
window.addEventListener("scroll", () => {
  if (window.scrollY > nav.offsetTop) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
