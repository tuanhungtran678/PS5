window.addEventListener("keydown", (e) => {

  if(State.mode === "detail"){
    if(e.key === "Escape"){
      Core.close();
    }
    return;
  }

  switch(e.key){

    case "ArrowRight":
      Core.next(1);
      break;

    case "ArrowLeft":
      Core.next(-1);
      break;

    case "Enter":
      Core.open();
      break;

    case "Escape":
      toggleControlCenter();
      break;

    case " ":
      toggleControlCenter();
      break;
  }

});