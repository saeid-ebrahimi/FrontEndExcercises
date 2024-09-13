function initApp() {
  const success = connectDatabase();
  if (!success) {
    console.log("Could not connect to database");
  }
}
function connectDatabase() {
  const didConnect = database.connect();
  if (didConnect) {
    return true;
  } else {
    return false;
  }
}
function findStandardAgent() {}
function findAgentByRequestType(
  resourceType: number
) {}

function determineSupportAgent(ticket) {
  let agent;
  if (ticket.requestType === "unknown") {
    agent = findStandardAgent();
  }
  agent = findAgentByRequestType(
    ticket.requestType
  );
  return agent;
}

function createUser(email, password) {
  if (!isValidIdentity(email, password)) {
    console.log("Could not create user!");
  }
  // ...
}

function isValidIdentity(email, password) {
  if (
    !email.includes("@") ||
    password.length < 7
  ) {
    return false;
  }
  return true;
}
