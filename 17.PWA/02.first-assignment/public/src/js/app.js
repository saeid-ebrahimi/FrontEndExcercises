var deferredPrompt;
if (!window.Promise) {
  window.Promise = Promise
}
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(function () {
      console.log("%c service worker registered!", "background:blue;color:white;padding:3px;");
    }).catch(function (error) {
      console.warn(error)
    });
}
var button = document.querySelector('#start-button');
var output = document.querySelector('#output');

button.addEventListener('click', function () {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("https://swapi.dev/api/people/1")
    }, 3000);
  }).then(function (url) {
    return fetch(url)
  })

  promise
    .then(function (response) {
      console.log(response);
      return response.json()
    })
    .then(function (data) {
      console.log(data);
      output.textContent = data.name
      output.setAttribute("style", "color:green")
    })
    .catch(function (error) {
      console.log(error);
      output.textContent = "An Error Occurred!"
      output.setAttribute("style", "color:red")
    })

  var promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("https://httpbin.org/put")
    }, [3000]);
  }).then(function (url) {
    const data = { person: { name: 'Max', age: 28 } }
    return fetch(url, {
      method: "PUT",
      headers: {
        'Content-Type': "application/json",
        "Accept": "application/json"
      },
      mode: "cors",
      body: JSON.stringify(data)
    })
  })

  promise2
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      output.textContent = data.json.person.name
      output.setAttribute("style", "color:green")
    })
    .then(function (error) {
      console.log(error);
      output.textContent = "An Error Occurred!"
      output.setAttribute("style", "color:red")
    })
});