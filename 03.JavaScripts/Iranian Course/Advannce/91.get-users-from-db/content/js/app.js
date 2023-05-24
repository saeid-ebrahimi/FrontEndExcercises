const usersContainer = document.querySelector('#wrap-users')

window.addEventListener('load', () => {
    fetch('http://localhost:3000/api/users')
        .then(res => res.json())
        .then(data => {
            data.forEach(user => {
                usersContainer.insertAdjacentHTML('beforeend', `
                <div class="user">
                    <div class="user-profile-wrap">
                        <img class="user-profile" src="content/img/noimg.png" alt="default-image">
                        <div class="user-profile-description">
                            <h1 class="user-profile-name">${user.firstname} - ${user.lastname}<span class="user-age">18</span> </h1>
                            <h3 class="user-explanations">Password: ${user.password}</h3>
                        </div>
                    </div>
                    <div class="btn-groups-column">
                        <button class="delete-user-btn">delete</button>
                        <button class="edit-user-btn">edit</button>
                    </div>
                </div>
                `)
            });
        })
})