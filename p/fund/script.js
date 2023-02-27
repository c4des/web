const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");

document.addEventListener("mousemove", e => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

links.forEach(link => {
  link.addEventListener("mouseover", () => {
    cursor.classList.add("link-grow");
  });
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("link-grow");
  });
});
