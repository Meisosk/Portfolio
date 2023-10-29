const listItems = document.querySelectorAll(".nav ul li");
const sections = document.querySelectorAll("section");

window.onscroll = () => {
  const top = window.scrollY;
  console.log("here");
  // Handle the "Welcome" link separately
  if (top === 0) {
    listItems.forEach((item) => {
      item.classList.remove("active");
    });
    listItems[0].classList.add("active"); // Assuming "Welcome" is the first item
    return;
  }

  // Handle other sections
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
