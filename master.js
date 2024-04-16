// function handelSearch() {
document.querySelector(".navControls").addEventListener("submit", function (e) {
  e.preventDefault();
  function search() {
    let inp = document.querySelector("input").value.toLowerCase();
    let boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i++) {
      let h1 = boxes[i].querySelector("h1").innerHTML.toLowerCase();
      if (h1.includes(inp)) {
        boxes[i].style.display = "block";
      } else {
        boxes[i].style.display = "none";
      }
    }
  }
  document.querySelector(".btnSearch").addEventListener("click", function () {
    search();
  });
});
