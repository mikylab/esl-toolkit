fetch("/esl-toolkit/assets/components/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header-placeholder").innerHTML = data;

    // Now header is loaded, add hamburger toggle listener:
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (menuToggle && menu) {
      menuToggle.addEventListener("click", () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", !isExpanded);
        if (menu.hasAttribute("hidden")) {
          menu.removeAttribute("hidden");
        } else {
          menu.setAttribute("hidden", "");
        }
      });

      // Optional: close menu if user clicks outside it
      document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
          menu.setAttribute("hidden", "");
          menuToggle.setAttribute("aria-expanded", false);
        }
      });
    }

    const select = document.getElementById("game-select");
    if (select) {
      select.addEventListener("change", () => {
        if (select.value) window.location.href = select.value;
      });
    }
  });

fetch("/esl-toolkit/assets/components/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });
