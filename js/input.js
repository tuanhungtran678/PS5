window.addEventListener("keydown",(e)=>{

  switch(e.key){

    case "ArrowRight":
      Core.next(1);
      break;

    case "ArrowLeft":
      Core.next(-1);
      break;

    case "Enter":
      UI.openDetail();
      break;

    case "Escape":
      UI.closeDetail();
      break;

  }

});