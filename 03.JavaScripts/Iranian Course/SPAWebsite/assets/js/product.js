const commentSenderBtn = document.querySelector('.comment__sender-btn button')
const commentResponseBtn = document.querySelector('.comment__response-btn button')
const productPageBtnsTab = document.querySelector('.product-page_btns-tab')
const lessonBoxTitle = document.querySelectorAll('.lesson__box--title')
const questionBoxTitle = document.querySelectorAll('.question__box--title')

function showFormReplyComment(formComment) {
    formComment.classList.add('active')
}


productPageBtnsTab.addEventListener('click', (event) => {
    let targetTabName = event.target.dataset.tab
    const targetTabElem = document.getElementById(targetTabName)
    const beforeActiveTabBtn = document.querySelector('.product-page_btns-tab button.active')
    const beforeActiveTab = document.querySelector('.product-page__tab.active')
    beforeActiveTab ? beforeActiveTab.classList.remove('active') : ''
    beforeActiveTabBtn ? beforeActiveTabBtn.classList.remove('active') : ''
    event.target.classList.add('active')
    targetTabElem.classList.add('active')
})

commentSenderBtn.addEventListener('click', () => {
    const formReplySenderComment = document.querySelector('.form__reply--sender-comemnt')

    showFormReplyComment(formReplySenderComment)
})
commentResponseBtn.addEventListener('click', () => {
    const formReplyResponseComment = document.querySelector('.form__reply--response-comemnt')
    showFormReplyComment(formReplyResponseComment)
})

lessonBoxTitle.forEach(titleBox => {
    titleBox.addEventListener('click', () => {
        const lessonBoxesContent = titleBox.nextElementSibling
        lessonBoxesContent.classList.toggle('active')
    })
})

questionBoxTitle.forEach(question => {
    question.addEventListener('click', () => {
        const lessonBoxesAnswerContent = question.nextElementSibling
        const questionIcon = question.firstElementChild.firstElementChild
        let isActive = lessonBoxesAnswerContent.classList.toggle('active')
        if (isActive) {
            questionIcon.className = 'fas fa-minus'
        } else {
            questionIcon.className = ' fas fa-plus'
        }
    })
})