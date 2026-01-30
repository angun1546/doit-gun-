let tt = gsap.timeline({ defaults: { duration: 1 } });
//defaults라는 특수 속성은 모든 하위 트윈과 타임라인에서 값을 상속할 수 있다.
//애니메이션을 1초동안 진행하는 기본값 설정

tt.from("h1", { y: -50, opacity: 0 })
  .from("p", { y: -50, opacity: 0 }, "-=0.5") // 타임라인 종료 0.5초 전 (오버랩)
  .from("a", { y: -50, opacity: 0 }, "+=1") // 타임라인 종료 1초 후 (갭)
  .from("img", { y: 200, opacity: 0 }, "3"); // 타임라인 시작으로부터 3초 후 (절대적)
.from(".box1", { x: 200, opacity: 0 }, "<") // 이전 트윈 타임라인 시작지점
  .to(".box2", { rotate: 360, x: 800, opacity: 1 }, ">"); // 이전 트윈 타임라인 종료지점



  document.querySelector('a.animation').addEventListener('click', function(e){e.preventDefault(); alert; tt.revese()})