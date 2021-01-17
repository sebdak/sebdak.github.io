const hamburgerButton = document.getElementsByClassName("hamburger-menu")[0];
const navigation = document.getElementsByClassName("navigation")[0];

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("hamburger-menu--active");

  if (hamburgerButton.classList.contains("hamburger-menu--active")) {
    const contentHeight = `${navigation.scrollHeight + navigation.offsetTop}px`;
    navigation.style.maxHeight = contentHeight;
  } else {
    navigation.style.maxHeight = "0px";
  }
});
