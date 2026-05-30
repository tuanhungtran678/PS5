const UI = {

  title: document.getElementById("title"),
  meta: document.getElementById("meta"),
  detail: document.getElementById("detail"),

  update(){

    const g = Games[Core.index];

    this.title.textContent = g.title;
    this.meta.textContent = g.meta;

  },

  openDetail(){
    this.detail.classList.remove("hidden");
  },

  closeDetail(){
    this.detail.classList.add("hidden");
  }

};