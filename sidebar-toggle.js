const toggleButton = document.getElementById("toggle-button");
          const aside = document.querySelector("aside");
          const content = document.getElementById("content");

          toggleButton.addEventListener("click", () => {
            aside.classList.toggle("hidden");
            aside.classList.toggle("w-64");
            aside.classList.toggle("w-0");
            aside.classList.toggle("p-4");
            aside.classList.toggle("p-0");

            // Update the toggle button icon
            const icon = toggleButton.querySelector("i");
            if (aside.classList.contains("hidden")) {
              icon.classList.remove("uil-bars");
              icon.classList.add("uil-arrow-right");
            } else {
              icon.classList.remove("uil-arrow-right");
              icon.classList.add("uil-bars");
            }
          });