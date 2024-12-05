const tabBtns = document.querySelectorAll(".tab__btn");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const targetEle = e.target;
    const activeElement = document.querySelector(".active__btn");
    const activeDiv = document.querySelector(".visible");

    if (!targetEle.classList.contains("active__btn")) {
      activeElement.classList.remove("active__btn");
      activeDiv.classList.add("hidden");
      activeDiv.classList.remove("visible");

      const bodyElementId = document.querySelector(`.${targetEle.id}__div`);
      bodyElementId.classList.add("visible");
      bodyElementId.classList.remove("hidden");
      targetEle.classList.add("active__btn");
    }
  });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

