const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// Dismissible popover with JS
const popover = new bootstrap.Popover('.popover-dismiss', {
    trigger: 'focus'
})