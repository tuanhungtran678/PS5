window.addEventListener("load", () => {

  const boot = document.getElementById("boot");
  const app = document.getElementById("app");

  if(!boot || !app) return;

  // total boot duration (PS-style feel)
  setTimeout(() => {

    // fade boot out (cinematic)
    boot.classList.add("fade-out");

    setTimeout(() => {
      boot.style.display = "none";

      app.classList.remove("hidden");

      // optional: start UI
      if(window.Screen?.go) Screen.go("home");

    }, 800);

  }, 3000);

});