window.Profile = {

  data:null,

  async load(user){

    let profile = await ProfileDB.load(user.uid);

    if(!profile){
      profile = await ProfileDB.create(
        user.uid,
        user.email
      );
    }

    this.data = profile;

    this.render();
  },

  render(){

    const p = this.data;

    const area = document.getElementById("profileArea");

    if(!area || !p) return;

    area.innerHTML = `
      <div class="profile-card">

        <div class="avatar">
          ${p.avatar
            ? `<img src="${p.avatar}">`
            : "🎮"}
        </div>

        <div class="profile-info">
          <div class="name">${p.username}</div>
          <div class="status">${p.status}</div>
          <div class="level">Level ${p.level}</div>
        </div>

      </div>
    `;
  }

};