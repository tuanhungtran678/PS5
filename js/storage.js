window.Storage = {
  get() {
    return +(localStorage.getItem("index") || 0);
  },

  set(i) {
    localStorage.setItem("index", i);
  }
};