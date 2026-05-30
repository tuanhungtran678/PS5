const Core = {

  index: Storage.get(),
  locked: false,

  setIndex(i){
    this.index = i;
    Storage.set(i);
  },

  next(dir){
    if(this.locked) return;

    this.locked = true;

    this.index += dir;

    if(this.index < 0) this.index = Games.length - 1;
    if(this.index >= Games.length) this.index = 0;

    Carousel.render();
    UI.update();

    setTimeout(()=> this.locked=false, 200);
  }

};