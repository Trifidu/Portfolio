const [red, green, blue] = [255, 255, 255];
const section1 = document.querySelector(".sidepanel__text"),
  section2 = document.querySelector(".sidepanel__divider"),
  section3 = document.querySelector("#social-icon1"),
  section4 = document.querySelector("#social-icon2"),
  section5 = document.querySelector("#social-icon3"),
  section6 = document.querySelector("#line1"),
  section7 = document.querySelector("#line2"),
  section8 = document.querySelector("#line3");

function changeColorBg(section) {
  window.addEventListener("scroll", () => {
    let y = 1 + (window.scrollY || window.pageYOffset) / 450;
    y = y < 1 ? 1 : y;
    const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
    section.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });
}

function changeColor(section) {
  window.addEventListener("scroll", () => {
    let y = 1 + (window.scrollY || window.pageYOffset) / 450;
    y = y < 1 ? 1 : y;
    const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
    section.style.color = `rgb(${r}, ${g}, ${b})`;
  });
}

changeColor(section1);
changeColor(section3);
changeColor(section4);
changeColor(section5);
changeColorBg(section2);
changeColorBg(section6);
changeColorBg(section7);
changeColorBg(section8);
