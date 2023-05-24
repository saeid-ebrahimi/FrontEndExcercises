
const user = {
    id:1,
    username: "Amin",
    age:22,
    walk: function (){
        console.log(this.username+ " is walking...")
    },
    // aboutUser: function (){
    //     console.log(this)
    //     setTimeout(function() {
    //         console.log(this.username," is ", this.age+ " years old")
    //     }.bind(user), 3000)
    // },
    aboutUser: function (){ // arrow functions do the binding automatically
        console.log(this)
        setTimeout(() =>{
            console.log(this.username," is ", this.age+ " years old")
        }, 3000)
    },
}
const user2 = {
    id:1,
    username: "Ali",
    age:19,
}
user.walk()
user.walk.call(user2)
user.aboutUser.call(user2)
user.aboutUser.apply(user2)
