
window.onload = function () {
  document.getElementById("title").addEventListener("click", function () {
    const element = document.getElementById("body");
    element.classList.add("animated", "fadeOutDown");
    setTimeout(function () {
      window.location.replace("/index.html");
    }, 1100);
  });
}