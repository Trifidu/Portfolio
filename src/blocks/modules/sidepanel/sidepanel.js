const [red, green, blue] = [255, 255, 255];
const section1 = document.querySelector(".sidepanel__text");
const section2 = document.querySelector(".sidepanel__divider");
const section3 = document.getElementById("social-icon1");
const section4 = document.getElementById("social-icon2");
const section5 = document.getElementById("social-icon3");
const section6 = document.getElementById("line1");
const section7 = document.getElementById("line2");
const section8 = document.getElementById("line3");

window.addEventListener("scroll", () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 350;
  y = y < 1 ? 1 : y;
  const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
  section1.style.color = `rgb(${r}, ${g}, ${b})`;
});
window.addEventListener("scroll", () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 350;
  y = y < 1 ? 1 : y;
  const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
  section2.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
window.addEventListener("scroll", () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 350;
  y = y < 1 ? 1 : y;
  const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
  section3.style.color = `rgb(${r}, ${g}, ${b})`;
});
window.addEventListener("scroll", () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 350;
  y = y < 1 ? 1 : y;
  const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
  section4.style.color = `rgb(${r}, ${g}, ${b})`;
});
window.addEventListener("scroll", () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 350;
  y = y < 1 ? 1 : y;
  const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
  section5.style.color = `rgb(${r}, ${g}, ${b})`;
});
window.addEventListener("scroll", () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 450;
  y = y < 1 ? 1 : y;
  const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
  section6.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
window.addEventListener("scroll", () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 450;
  y = y < 1 ? 1 : y;
  const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
  section7.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
window.addEventListener("scroll", () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 450;
  y = y < 1 ? 1 : y;
  const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
  section8.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
