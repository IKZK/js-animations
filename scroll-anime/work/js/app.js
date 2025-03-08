document.addEventListener("DOMContentLoaded", function() {
  const boxes = document.querySelectorAll(".scroll-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("displayed");
      } else {
        entry.target.classList.remove("displayed");
      }
    });
  }, { threshold: 0.5 });

  boxes.forEach((box) => {
    observer.observe(box);
  });
});
