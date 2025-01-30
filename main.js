document.addEventListener("DOMContentLoaded", () => {
  const hasLoaded = localStorage.getItem("hasLoaded");
  const loader = document.querySelector(".page_loader");
  const page_Wrapper = document.querySelector(".page-wrapper");

  if (!hasLoaded) {
    // Show loader and prevent scrolling
    if (loader) {
      loader.style.display = "block"; // Set display to block
    }
    document.body.style.overflow = "hidden"; // Set overflow to hidden
    page_Wrapper.style.display = "block";

    // Run loading animation
    const items = document.querySelectorAll("[counter]");

    items.forEach((item) => {
      gsap.fromTo(
        item,
        {
          textContent: 0,
        },
        {
          textContent: 100,
          duration: 1.8,
          ease: Power1.easeIn,
          snap: { textContent: 1 },
          stagger: 1,
          onUpdate: function () {
            item.textContent = Math.floor(item.textContent).toLocaleString();
          },
        }
      );
    });

    let tl = gsap.timeline();

    tl.to("[loader-progress]", {
      width: "100%",
      duration: 3,
      stagger: 0.1,
      ease: "expo.inOut",
    })
      .to(
        ".page_loader",
        {
          yPercent: -110,
          duration: 1.5,
          ease: "expo.inOut",
        },
        "-=1"
      )
      .set(".page_loader", {
        display: "none",
      })
      .set(document.body, {
        overflow: "auto",
      })
      .from(
        "[effect-on-load]",
        {
          opacity: 0,
          duration: 0.3,
          stagger: 0.1,
        },
        "-=0.2"
      )
      .from("[hero-img]", {
        scale: "0.8",
        autoAlpha: 0,
        duration: 0.5,
      });

    // Set flag in localStorage to indicate animation has run
    localStorage.setItem("hasLoaded", "true");
  } else {
    // If already loaded, hide the loader immediately
    if (loader) {
      loader.style.display = "none";
    }
    document.body.style.overflow = "auto";
    page_Wrapper.style.display = "block";
  }
});

// const items = document.querySelectorAll("[counter]");

// items.forEach((item) => {
//   gsap.fromTo(
//     item,
//     {
//       textContent: 0,
//     },
//     {
//       textContent: 100,
//       duration: 1.8,
//       ease: Power1.easeIn,
//       snap: { textContent: 1 },
//       stagger: 1,
//       onUpdate: function () {
//         item.textContent = Math.floor(item.textContent).toLocaleString();
//       },
//     }
//   );
// });

// let tl = gsap.timeline();

// tl.to("[loader-progress]", {
//   width: "100%",
//   duration: 3,
//   stagger: 0.1,
//   ease: "expo.inOut",
// })
//   .to(
//     ".page_loader",
//     {
//       yPercent: -110,
//       duration: 1.5,
//       ease: "expo.inOut",
//     },
//     "-=1"
//   )
//   .set(".page_loader", {
//     display: "none",
//   })
//   .set(document.body, {
//     overflow: "auto",
//   })
//   .from(
//     "[effect-on-load] ",
//     {
//       opacity: 0,
//       duration: 0.3,
//       stagger: 0.1,
//     },
//     "-=0.2"
//   )
//   .from("[hero-img]", {
//     scale: "0.8",
//     autoAlpha: 0,

//     duration: 0.5,
//   });
