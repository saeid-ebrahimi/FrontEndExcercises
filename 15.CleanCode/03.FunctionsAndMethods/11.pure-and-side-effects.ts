class User {
  constructor(
    private email: string,
    private password: string
  ) {
    this.email = email;
    this.password = password;
  }
  public save(): void {
    database.insert(this);
  }
  public encryptPassword() {
    this.password.toUpperCase();
    // ... hash the password and
  }
}

function generateId(userName: string) {
  const id = "id_" + userName;
  return id;
}

function generateId2(userName: string) {
  const id = userName + Math.random().toString();
  return id;
}
const startSession = (user: User) => {
  // change user data
  user.encryptPassword();
  // process the session
  // ...
};

function createUser(
  email: string,
  password: string
) {
  const user = new User(email, password);
  startSession(user);
  return user;
}
