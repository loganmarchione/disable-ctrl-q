browser.commands.onCommand.addListener(function(command) {
  if (command == "toggle") {
    var myAudio = new Audio();
    myAudio.src = "sound.ogg";
    myAudio.play();
  }
});