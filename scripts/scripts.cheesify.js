//cheesify.js

// Listen for messages on the content page
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === 'cheesify') {
      cheesify();
    }
  }
);

// Our image replacement script
function cheesify() {
  document.querySelectorAll('img').forEach(img => {
    img.src = `https://source.unsplash.com/featured/?cheese/${img.width}x${img.height}?${Math.random()}`;
    img.srcset = img.src;
  });
}
