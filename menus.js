const menuButton = document.getElementById("navbutton");
const menu = document.getElementById("navcontent");
const links = document.getElementById("links");
const image = menuButton.children[0];
let anim;

menuButton.addEventListener("click", () => {
  if (getComputedStyle(menu).display === "none") {
    anim = requestAnimationFrame(menuDown);
  } else {
    links.style.top = links.scrollHeight;
    anim = requestAnimationFrame(menuUp);
  }
});

function menuDown() {
  const pos = parseFloat(getComputedStyle(links).top);
  const end = links.scrollHeight;
  if (pos < end) {
    links.style.top = (pos + 20) + "px";
    anim = requestAnimationFrame(menuDown);
  }
  else {
    links.style.top = "100%";
    image.setAttribute("src", "images/upArrow.png");
    menu.style.display = "block";
    cancelAnimationFrame(anim);
  }
}

function menuUp() {
  const pos = parseFloat(getComputedStyle(links).top);
  const end = menu.scrollHeight / 3;
  console.log(pos);
  if (pos > end) {
    links.style.top = (pos - 20) + "px";
    anim = requestAnimationFrame(menuUp);
  }
  else {
    menu.style.display = "none";
    links.style.top = "100%";
    image.setAttribute("src", "images/downArrow.png");
    cancelAnimationFrame(anim);
  }
}