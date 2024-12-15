var shareImageButton = document.querySelector('#share-image-button');
var createPostArea = document.querySelector('#create-post');
var closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');
var sharedMomentsArea = document.querySelector('#shared-moments');

function openCreatePostModal() {
  createPostArea.style.display = 'block';
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
  createPostArea.style.display = 'none';
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

function createCard() {
  var cardWrapper = document.createElement("div")
  cardWrapper.className = "shared-moment-card mdl-card mdl-shadow--2dp"
  var cardTitle = document.createElement("div")
  cardTitle.className = "mdl-card__title"
  cardTitle.style.backgroundImage = 'url("/src/images/sf-boat.jpg")';
  cardTitle.style.backgroundSize = 'cover'
  cardTitle.style.height = "180px"
  cardWrapper.appendChild(cardTitle)

  var cardTitleTextElement = document.createElement("h2")
  cardTitleTextElement.className = "mdl-card__title-text"
  cardTitleTextElement.textContent = "San Francisco Trip"
  cardTitleTextElement.style.color = "white"
  cardTitle.appendChild(cardTitleTextElement)

  var cardSupportingText = document.createElement("div")
  cardSupportingText.className = "mdl-card__supporting-text"
  cardSupportingText.textContent = "In San Francisco"
  cardSupportingText.style.textAlign = "center"
  cardWrapper.appendChild(cardSupportingText)

  // var cardSaveButton = document.createElement('button')
  // cardSaveButton.textContent = "save"
  // cardSaveButton.addEventListener("click", onSaveButtonClicked)
  // cardSupportingText.appendChild(cardSaveButton)

  componentHandler.upgradeElement(cardWrapper)
  sharedMomentsArea.appendChild(cardWrapper)
}

async function getPostsData(url) {
  try {
    const getResponse = await fetch(url)
    const data = await getResponse.json()
    networkDataReceived = true
    console.log("From Web", data);
    clearCards()
    createCard()
    return data
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
      clearCards()
      createCard();
    }
  }
}

const url = 'https://httpbin.org/get'
let networkDataReceived = false
getPostsData(url)
getPostDataFromCache(url)
if ('caches' in window) {
  getPostDataFromCache(url)
}
