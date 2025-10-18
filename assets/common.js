(function () {
  function init() {
    document.body.classList.add("page-loaded");
    var navLinks = document.querySelectorAll("header nav a, header h1 a");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        var href = link.getAttribute("href");
        if (!href) return;
        if (href.charAt(0) === "#") return;
        if (
          link.target === "_blank" ||
          e.metaKey ||
          e.ctrlKey ||
          e.shiftKey ||
          e.altKey
        )
          return;
        e.preventDefault();
        document.body.classList.remove("page-loaded");
        setTimeout(function () {
          window.location.href = href;
        }, 180);
      });
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
