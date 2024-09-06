type UserType = {
    id: string;
    email: string;
    password: string;
}
function saveUser(email: string, password: string): undefined {
    const userId = Math.random().toString();
    const user: UserType = {
        id: userId,
        email,
        password
    }
    db.insert("users", user);
}

saveUser("test@test.com", "testers")

const user2: UserType = { id: Math.random().toString(), email: "test@test.com", password: "testers" }
function saveUser2(user: UserType) {
    db.insert("users", user);
}

class User{
    private id: string;
    constructor(private email:string,private password:string) {
        this.id = Math.random().toString();
        this.password = password;
        this.email = email;
    }
    save() {
        db.insert("users", this)
    }
}

const newUser = new User("test@test.com", "testers");
newUser.save();
