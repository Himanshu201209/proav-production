let typeSplit = new SplitType("[splitwords]", {
  types: "words",
  wordsClass: "split-words",
  tagName: "span",
});

let typeSplitL = new ("[splitlines]",
{
  types: "lines",
  wordsClass: "split-lines",
  tagName: "span",
})();

gsap.registerPlugin(ScrollTrigger);

//let mm = gsap.matchMedia();
//mm.add("(min-width: 992px)", () => {
setTimeout(function () {
  // Select all elements with the class 'word' within elements having the attribute 'effect-on-scroll'
  const wordGsaps = document.querySelectorAll("[effect-on-scroll] .word");

  // Select all elements with the attribute 'effect-on-scroll'
  const targetEles = document.querySelectorAll("[effect-on-scroll]");

  // Loop through each target element to apply individual ScrollTriggers
  targetEles.forEach((target) => {
    //const words = target.querySelectorAll(".line");
    gsap.fromTo(
      targetEles,
      {
        opacity: 0.2,
        willChange: "opacity",
      },
      {
        ease: "none",
        opacity: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: target,
          start: "top bottom-=15%",
          end: "bottom bottom-=35%",
          scrub: true,
          //markers: true,
        },
      }
    );
  });
}, 2000);
//});
