import {
  emailIsValid,
  passwordIsValid,
  saveUser,
  showErrorMessage,
  User,
} from "./08.do-one-thing";

function createUser(user: User) {
  if (
    emailIsValid(user.email) &&
    passwordIsValid(user.password)
  ) {
    saveUser(user);
  } else {
    showErrorMessage("Invalid input");
  }
}

function createSupportChannel(email: string) {
  if (!emailIsValid(email)) {
    showErrorMessage(
      "Invalid email - could not create channel"
    );
  }
}
