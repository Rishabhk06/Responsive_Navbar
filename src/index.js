import "./styles.css";

const button = document.getElementById("img");
button.addEventListener("click", showfnc);

function showfnc() {
  console.log("button clicked");

  document.getElementById("ul").classList.toggle("show");

  //menu button wali image ko 90deg rotate krne ke lie
  document.getElementById("img").classList.toggle("show");
}
