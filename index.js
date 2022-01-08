const p1 = document.querySelector("#p1Button");
const p2 = document.querySelector("#p2Button");
const playto = document.querySelector("#playto");
const reset = document.querySelector("#reset");
let i = 0;
let n = 0;
p1.addEventListener("click", function () {
  i = i + 1;
  p1Display.innerHTML = i;
  if (i == playto.value) {
    document.getElementById("p1Display").style.color = "green";
    document.getElementById("p2Display").style.color = "Red";
    document.getElementById("p1Button").disabled = true;
    document.getElementById("p2Button").disabled = true;
  }
});
p2.addEventListener("click", function () {
  n = n + 1;
  p2Display.innerHTML = n;
  if (n == playto.value) {
    document.getElementById("p2Display").style.color = "green";
    document.getElementById("p1Display").style.color = "Red";
    document.getElementById("p1Button").disabled = true;
    document.getElementById("p2Button").disabled = true;
  }
});
reset.addEventListener("click", function () {
  window.location.reload();
});
