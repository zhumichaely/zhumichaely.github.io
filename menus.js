const menuButton = document.getElementById("navbutton");
menuButton.addEventListener("click", () => {
  const menu = document.getElementById("navcontent"),
    image = menuButton.children[0];
  if (menu.style.display === "none") {
    image.setAttribute("src", "images/upArrow.png");
    menu.style.display = "block";
  } else {
    image.setAttribute("src", "images/downArrow.png");
    menu.style.display = "none";
  }
});
