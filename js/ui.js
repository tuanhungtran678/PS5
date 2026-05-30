window.UI = {

  update(){
    // background reaction handled in input.js
  },

  openDetail(i){
    const el = document.getElementById("detail");

    el.innerHTML = `
      <div class="detail">
        <h2>${Games[i].title}</h2>
        <p>${Games[i].desc || "No description"}</p>
        <button onclick="Core.close()">Back</button>
      </div>
    `;
  },

  closeDetail(){
    const el = document.getElementById("detail");
    el.innerHTML = "";
  }

};