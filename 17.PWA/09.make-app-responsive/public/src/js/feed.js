var shareImageButton = document.querySelector('#share-image-button');
var createPostArea = document.querySelector('#create-post');
var closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');
var sharedMomentsArea = document.querySelector('#shared-moments');

function openCreatePostModal() {
  createPostArea.style.display = 'block';
  setTimeout(function () {
    createPostArea.style.transform = "translateY(0)";
  }, 100)

  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(function (choiceResult) {
      console.log(choiceResult.outcome);
      if (choiceResult.outcome === 'dismissed') {
        console.log('User cancelled installation');
      } else {
        console.log("User added to home screen");
      }
    });
    deferredPrompt = null;
  }
}

function closeCreatePostModal() {
  createPostArea.style.transform = "translateY(100vh)";
  setTimeout(function () {
    createPostArea.style.display = 'none';
  }, 300)
}

shareImageButton.addEventListener('click', openCreatePostModal);

closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);

function onSaveButtonClicked(event) {
  console.log("clicked!");
  // if ("caches" in window) {
  //   caches.open('user-requested')
  //     .then(function (cache) {
  //       cache.add('https://httpbin.org/get')
  //       cache.add("/src/images/sf-boat.jpg")
  //     })
  // }
}

function clearCards() {
  while (sharedMomentsArea.hasChildNodes()) {
    sharedMomentsArea.removeChild(sharedMomentsArea.lastChild)
  }
}

function createCard(data) {
  var cardWrapper = document.createElement("div")
  cardWrapper.className = "shared-moment-card mdl-card mdl-shadow--2dp"
  var cardTitle = document.createElement("div")
  cardTitle.className = "mdl-card__title"
  cardTitle.style.backgroundImage = `url(${data.image})`;
  cardTitle.style.backgroundSize = 'cover'
  cardWrapper.appendChild(cardTitle)

  var cardTitleTextElement = document.createElement("h2")
  cardTitleTextElement.className = "mdl-card__title-text"
  cardTitleTextElement.textContent = data.title
  cardTitleTextElement.style.color = "white"
  cardTitle.appendChild(cardTitleTextElement)

  var cardSupportingText = document.createElement("div")
  cardSupportingText.className = "mdl-card__supporting-text"
  cardSupportingText.textContent = data.location
  cardSupportingText.style.textAlign = "center"
  cardWrapper.appendChild(cardSupportingText)
  componentHandler.upgradeElement(cardWrapper)
  sharedMomentsArea.appendChild(cardWrapper)
}

async function updateUI(data) {
  clearCards()
  data.forEach(item => createCard(item))
}

async function getPostsData(url) {
  try {
    const getResponse = await fetch(url)
    const data = await getResponse.json()
    networkDataReceived = true
    console.log("From Web", data);
    const dataArray = []
    for (let key in data) {
      dataArray.push(data[key])
    }
    return dataArray
  } catch (error) {
    console.warn("cannot get the data");
  }
}

async function getPostDataFromCache(url) {
  const dynamicCache = await caches.match(url)
  if (dynamicCache) {
    const data = await dynamicCache.json()
    console.log("From cache", data);
    if (!networkDataReceived) {
      const dataArray = []
      for (let key in data) {
        dataArray.push(data[key])
      }
      return dataArray
    }
  }
}

async function createCards(url) {
  const data = await getPostsData(url)
  if (data) {
    updateUI(data)
  }
}

async function createCardsFromCache(url) {
  const data = await getPostDataFromCache(url)
  if (data) {
    updateUI(data)
  }
}
function createCardsFromIndexedDB() {
  readAllData('posts')
    .then(function (data) {
      if (!networkDataReceived) {
        console.log('From cache', data);
        updateUI(data);
      }
    });
}
// async function createCardsFromIndexedDB() {
//   const allData = readAllData("posts")
//   if (!networkDataReceived) {
//     console.log("From IndexDB", allData);
//     updateUI(allData)
//   }
// }
const url = 'https://pwagram-3a2a4-default-rtdb.firebaseio.com/posts.json'

let networkDataReceived = false
createCards(url)
// if ('caches' in window) {
//   createCardsFromCache(url)
// }

if ("indexedDB" in window) {
  // readAllData('posts')
  //   .then(function (data) {
  //     if (!networkDataReceived) {
  //       console.log('From cache', data);
  //       updateUI(data);
  //     }
  //   });
  createCardsFromIndexedDB()
}
