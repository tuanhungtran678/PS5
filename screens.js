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