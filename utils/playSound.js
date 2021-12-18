const playSound = file => { 
    let audio = new Audio(`sounds/${file}`);
    audio.play();
  }

  export default playSound