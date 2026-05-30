const games = [
  { title: "Spider World" },
  { title: "Neon Drift" },
  { title: "Ghost Mission" },
  { title: "Cyber Arena" }
];

let index = 0;

const carousel = document.getElementById("carousel");

function render(){
  carousel.innerHTML = "";

  games.forEach((g,i)=>{
    const el = document.createElement("div");
    el.className = "card" + (i === index ? " active" : "");
    el.innerText = g.title;
    carousel.appendChild(el);
  });
}

function move(dir){
  index += dir;

  if(index < 0) index = games.length - 1;
  if(index >= games.length) index = 0;

  render();
}

window.addEventListener("keydown",(e)=>{

  if(e.key === "ArrowRight") move(1);
  if(e.key === "ArrowLeft") move(-1);

});

render();

function bootSystem(){
  setTimeout(()=>{
    document.getElementById("boot").style.display="none";
    document.getElementById("app").classList.remove("hidden");
    Screen.go("home");
  }, 3000);
}

bootSystem();

function renderScreen(){

  const app = document.getElementById("app");

  if(Screen.current === "home"){
    app.innerHTML = HomeUI();
  }

  if(Screen.current === "plus"){
    app.innerHTML = PlusUI();
  }

  if(Screen.current === "login"){
    app.innerHTML = LoginUI();
  }
}
