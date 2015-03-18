chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('bmicalc.html', {
    id: "bmiCalc",
    bounds: {
      width: 320,
      height: 480
    },
    maxWidth: 320,
    minWidth: 320,
    minHeight: 480,
    maxHeight: 480,
  });
});
