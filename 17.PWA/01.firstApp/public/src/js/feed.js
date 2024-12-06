const shareImageButton = document.getElementById("share-image-button");
const createPostArea = document.getElementById("create-post")
const closeCreatePostModalButton = document.getElementById("close-create-post-modal-btn")

async function openCreatePostModal() {
  createPostArea.style.display = "block";
  if (deferredPrompt) {
    deferredPrompt.prompt()
    const userChoice = await deferredPrompt.userChoice
    if (userChoice.outcome === "dismissed") {
      console.log("%cUser canceled installation", 'background:white;color:#DC2626;padding:5px;border-radius:5px;');
    } else {
      const LOG_STYLES = `color:white;
        background: #166534;
        padding: 8px 16px;
        border-radius:5px;`
      console.log("%cUser added to home screen", LOG_STYLES);
    }
    deferredPrompt = null;
  }
}

function closeCreatePostModal() {
  createPostArea.style.display = "none"
}

shareImageButton.addEventListener("click", openCreatePostModal)
closeCreatePostModalButton.addEventListener("click", closeCreatePostModal)


