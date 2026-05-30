const Carousel = {

  el: document.getElementById("carousel"),

  render(){

    this.el.innerHTML = "";

    Games.forEach((g,i)=>{

      const div = document.createElement("div");
      div.className = "card";

      if(i === Core.index) div.classList.add("active");

      div.innerHTML = `<h3>${g.title}</h3>`;

      this.el.appendChild(div);
    });

  }

};