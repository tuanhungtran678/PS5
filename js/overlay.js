window.addEventListener("load",()=>{

  setTimeout(()=>{

    document.getElementById("startup").style.display="none";
    document.getElementById("app").classList.remove("hidden");

    Carousel.render();
    UI.update();

  },2000);

});