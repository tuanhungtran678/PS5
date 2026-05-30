window.Carousel = {
  render() {

    const el = document.getElementById("carousel");
    el.innerHTML = "";

    Games.forEach((g, i) => {

      const card = document.createElement("div");

      card.className = "card" + (i === Core.index ? " active" : "");

      card.innerHTML = `<h3>${g.title}</h3>`;

      el.appendChild(card);
    });

  }
};