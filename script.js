const head1 = document.getElementById("head1");
const hill1 = document.getElementById("hill1");
const hill4 = document.getElementById("hill4");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  //console.log(scrollY);

  head1.style.top = 200 + scrollY * 1.2 + "px";
  hill4.style.top = scrollY * 0.6 + "px";
  hill4.style.left = scrollY * -1.5 + "px";
});
