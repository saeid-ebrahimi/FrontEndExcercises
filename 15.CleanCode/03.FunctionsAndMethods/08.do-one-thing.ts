export const EMAIL_REGEX = new RegExp(
  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
);

export const PASSWORD_REGEX = new RegExp(
  /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-z0-9\u0023\u002D\u002A\u002F\u0040\u005F]{6,}$/
);

export type User = {
  email: string;
  password: string;
};

export function emailIsValid(
  email: string
): boolean {
  return (
    email.trim() === "" &&
    email.includes("@") &&
    EMAIL_REGEX.test(email)
  );
}

export function passwordIsValid(
  password: string
): boolean {
  return (
    password.trim() === "" &&
    PASSWORD_REGEX.test(password)
  );
}

export function showErrorMessage(
  message: string
): void {
  console.log(message);
}

export function saveUser(user: User) {
  database.insert(user);
}

function createUser(user: User) {
  if (
    !emailIsValid(user.email) ||
    !passwordIsValid(user.password)
  ) {
    showErrorMessage("Invalid input");
    return;
  }
  saveUser(user);
}
