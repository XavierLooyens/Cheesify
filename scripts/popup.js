function sendCheesifyMsg() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { //Finds that are active
    chrome.tabs.sendMessage(tabs[0].id, {action: 'cheesify'}); //Sends a message (object) to the active tab
  });
}

//Trigger the function when the button is clicked
document.querySelector('#cheesify').addEventListener('click', event => sendCheesifyMsg());
