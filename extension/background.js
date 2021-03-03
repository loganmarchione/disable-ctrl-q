browser.commands.onCommand.addListener(function(toggle) {
    console.log("Ctrl+Q pressed!")
});

function onCanceled(error) {
    console.log(`Canceled: ${error}`);
  }

  var uninstalling = browser.management.uninstallSelf({
    showConfirmDialog: true,
    dialogMessage: "After 21 years, Mozilla finally fixed bug https://bugzilla.mozilla.org/show_bug.cgi?id=52821. Starting in FF87, you can set `browser.quitShortcut.disabled` = `true` in `about:config` to prevent Firefox from closing when pressing Ctrl+Q on all platforms (including Linux).\nI'm retiring this extension. The extension will now attempt a self-uninstall.\n"
  });

  uninstalling.then(null, onCanceled);