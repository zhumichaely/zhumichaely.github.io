const menuButton = document.getElementById("navbutton");
const menu = document.getElementById("navcontent");
menu.style.display = "none";
menuButton.addEventListener("click", () => {
  const image = menuButton.children[0];
  if (menu.style.display === "none") {
    image.setAttribute("src", "images/upArrow.png");
    menu.style.display = "block";
  } else {
    image.setAttribute("src", "images/downArrow.png");
    menu.style.display = "none";
  }
});
