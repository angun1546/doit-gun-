let tt = gsap.timeline();
tt.to(".one", { duration: 2, x: 500 })
  .to(".two", { duration: 3, y: 200, x: 500 })
  .to(".three", { duration: 1, rotate: 720 }, 1)
  .to(".four", {duration:1, rotate:720, x:500},'<0.5');
