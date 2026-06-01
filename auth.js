import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

onAuthStateChanged(AUTH, async(user)=>{

  if(!user) return;

  await Profile.load(user);

});