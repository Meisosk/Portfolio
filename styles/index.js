const listItems = document.querySelectorAll(".nav ul li");
const sections = document.querySelectorAll("section");

window.onscroll = () => {
  const top = window.scrollY;
  if (top === 0) {
    listItems.forEach((item) => {
      item.classList.remove("active");
    });
    listItems[0].classList.add("active");
    return;
  }

  sections.forEach((sec) => {
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");
    const navLink = document.querySelector('.nav ul li a[href="#' + id + '"]');

    if (navLink && top >= offset && top < offset + height) {
      listItems.forEach((item) => {
        item.classList.remove("active");
      });
      navLink.parentElement.classList.add("active");
    }
  });
};

window.addEventListener("scroll", function () {
  var hero = document.getElementById("hero");
  if (window.scrollY > hero.offsetTop) {
    hero.classList.add("active");
  } else {
    hero.classList.remove("active");
  }
});
