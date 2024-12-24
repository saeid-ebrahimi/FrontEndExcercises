
var deferredPrompt;
var enableNotificationsButtons = document.querySelectorAll('.enable-notifications');

if (!window.Promise) {
  window.Promise = Promise;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function () {
      console.log('Service worker registered!');
    })
    .catch(function (err) {
      console.log(err);
    });
}

window.addEventListener('beforeinstallprompt', function (event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});

function displayConfirmNotification() {
  var options = {
    body: "You successfully subscribed to our Notification service"
  }
  new Notification('Successfully subscribed!', options);
}

function askForNotificationPermission() {
  Notification.requestPermission(function (result) {
    console.log("User Choice", result);
    if (result !== "granted") {
      console.log("No notification permission granted!");
    } else {

    }
  })
}

if ("Notification" in window) {
  for (let i = 0; i < enableNotificationsButtons.length, i++) {
    enableNotificationsButtons.style.display = "inline-block"
    enableNotificationsButtons.addEventListener("click", askForNotificationPermission)
  }
}
