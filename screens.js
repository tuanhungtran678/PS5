window.Screen = {
  current: "home",

  go(name){
    this.current = name;
    renderScreen();
  }
};
function LoginUI(){

  return `
    <div class="login">

      <h1>Sign in to PlayStation Network</h1>

      <input id="email" placeholder="Email" />
      <input id="password" type="password" placeholder="Password" />

      <button onclick="PSN.login()">Sign In</button>

      <p id="status"></p>

    </div>
  `;
}

function PlusUI(){
  return `
    <h1>PlayStation Plus</h1>
    <p>Get access to online multiplayer, free games, and`
}

window.HomeUI = function(){

  return `
    <h1>Home</h1>
  `;

}