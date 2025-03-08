document.addEventListener("DOMContentLoaded", function () {
  const titles = document.querySelectorAll(".list-tit");

  titles.forEach((title) => {
    title.addEventListener("click", function () {
      const content = this.nextElementSibling;
      
      if (content.style.height && content.style.height !== "0px") {
        content.style.height = "0px";
        content.style.padding = "0";
      } else {
        content.style.height = content.scrollHeight + "px";
        content.style.padding = "1rem";
      }
    });
  });
});
