import {
  emailIsValid,
  passwordIsValid,
  showErrorMessage,
  User as UserType,
} from "./08.do-one-thing";
// it's useless function
// function buildUser(email, password) {
//   return {
//     email: email,
//     password: password,
//   };
// }

// better approach
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
}

function saveUser(user: UserType): void {
  const newUser = new User(
    user.email,
    user.password
  );
  newUser.save();
}

function createUser(user: UserType) {
  if (
    emailIsValid(user.email) &&
    passwordIsValid(user.password)
  ) {
    saveUser(user);
  } else {
    showErrorMessage("Invalid input");
  }
}
