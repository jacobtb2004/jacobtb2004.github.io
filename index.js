var cursor = document.getElementById("cursor");
      document.addEventListener("mousemove", function (e) {
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
      });
      var MobileMenu = document.querySelector("#MobileMenu");
      var hamburger = document.querySelector(".hamburger");
      hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("is-active");
        MobileMenu.classList.toggle("MobileMenuActive");
      });
      window.addEventListener("resize", () => {
        let width = window.innerWidth;
        if (
          width >= 1200 &&
          MobileMenu.classList.contains("MobileMenuActive")
        ) {
          hamburger.click();
        }
      });