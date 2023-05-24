const usersContainer = document.querySelector('#wrap-users')
const deleteModal = document.querySelector('#delete-modal')

let userID = null

window.addEventListener('load', () => {
    getAllUsers()
})

function getAllUsers () {
    fetch('http://localhost:3000/api/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);

            usersContainer.innerHTML = ''

            data.forEach(user => {
                usersContainer.insertAdjacentHTML('beforeend', `
                <div class="user">
                <div class="user-profile-wrap">
                    <img class="user-profile" src="content/img/noimg.png" alt="default-image">
                    <div class="user-profile-description">
                        <h1 class="user-profile-name">${user.firstname} - ${user.lastname}<span class="user-age">18</span> </h1>
                        <h3 class="user-explanations">Pass: ${user.password}</h3>
                    </div>
                </div>
                <div class="btn-groups-column">
                    <button class="delete-user-btn" onclick="openDeleteModel('${user._id}')">delete</button>
                    <button class="edit-user-btn">edit</button>
                </div>
            </div>
                `)
            });
        })
}

function openDeleteModel (id) {

    userID = id

    deleteModal.classList.add('visible')
}

function closeModal () {
    deleteModal.classList.remove('visible')
}

function deleteUser () {

    fetch(`http://localhost:3000/api/users/${userID}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => console.log(data))

    getAllUsers()
    closeModal()
}