
      document.querySelectorAll("header a").forEach((link) => {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const id = entry.target.getAttribute("id");
            const link = document.querySelector(`header a[href="#${id}"]`);
            const section = entry.target;

            if (entry.isIntersecting) {
              document.querySelectorAll("header a").forEach((a) => a.classList.remove("border-b-2", "border-white"));
              document.querySelectorAll(".section-anchor").forEach((s) => s.classList.remove("active-section"));
              if (link) link.classList.add("border-b-2", "border-white");
              if (section) section.classList.add("active-section");
            }
          });
        },
        {
          threshold: 0.5,
        }
      );

      document.querySelectorAll(".section-anchor").forEach((section) => {
        observer.observe(section);
      });
