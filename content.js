var upperAd = document.getElementById("ad-placeholder-horizontal");
var sideAd = document.getElementById("ad-placeholder-vertical");
var gameFrame = document.getElementById("game");
var adBlockPrompt = document.getElementsByClassName("fc-ab-root")[0];

if (upperAd) upperAd.remove();
if (sideAd) sideAd.remove();
if (gameFrame) {
  window.onresize = null;
  document.onresize = null;
  gameFrame.style.setProperty("min-height", "100vh", "important");
  gameFrame.style.setProperty("min-width", "100vw", "important");
  // gameFrame.style.setProperty("height", "100vh", "important");
  // gameFrame.style.setProperty("width", "100vw", "important");
  gameFrame.style.setProperty("margin", "0px", "important");
}

if (adBlockPrompt) adBlockPrompt.remove();
