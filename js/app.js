let index = Storage.getIndex();
let lock = false;

const carousel = document.getElementById("carousel");
const detail = document.getElementById("detail");
const title = document.getElementById("title");
const meta = document.getElementById("meta");

/* ===== RENDER ===== */
function render(){

  carousel.innerHTML = "";

  games.forEach((g,i)=>{

    const div = document.createElement("div");
    div.className = "card" + (i===index ? " active":"");

    div.innerHTML = `<h3>${g.title}</h3>`;

    carousel.appendChild(div);
  });

  title.textContent = games[index].title;
  meta.textContent = games[index].meta;

  Storage.setIndex(index);
}

/* ===== MOVE ENGINE (SMOOTH LOCK) ===== */
function move(dir){

  if(lock) return;
  lock = true;

  index += dir;

  if(index < 0) index = games.length - 1;
  if(index >= games.length) index = 0;

  render();

  setTimeout(()=> lock=false, 220);
}

/* ===== INPUT SYSTEM ===== */
window.addEventListener("keydown",(e)=>{

  switch(e.key){

    case "ArrowRight":
      move(1);
      break;

    case "ArrowLeft":
      move(-1);
      break;

    case "Enter":
      detail.classList.remove("hidden");
      break;

    case "Escape":
      detail.classList.add("hidden");
      break;
  }
});

/* ===== INIT ===== */
setTimeout(()=>{
  document.getElementById("startup").style.display="none";
  document.getElementById("app").classList.remove("hidden");
  render();
},2500);