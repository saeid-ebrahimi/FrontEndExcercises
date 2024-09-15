import {
  processCreditCardPayment,
  processCreditCardRefund,
  processPayPalPayment,
  processPayPalRefund,
  processPlanPayment,
  processPlanRefund,
} from "./01.dirty-control-structures";
main();
type Transaction = {
  id: string;
  type: string;
  status: string;
  method: string;
  amount: string;
};
function main() {
  const transactions = [
    {
      id: "t1",
      type: "PAYMENT",
      status: "OPEN",
      method: "CREDIT_CARD",
      amount: "23.99",
    },
    {
      id: "t2",
      type: "PAYMENT",
      status: "OPEN",
      method: "PAYPAL",
      amount: "100.43",
    },
    {
      id: "t3",
      type: "REFUND",
      status: "OPEN",
      method: "CREDIT_CARD",
      amount: "10.99",
    },
    {
      id: "t4",
      type: "PAYMENT",
      status: "CLOSED",
      method: "PLAN",
      amount: "15.99",
    },
  ];

  try {
    processTransactions(transactions);
  } catch (error) {
    showErrorMessage(error.message);
  }
}

// try should do one thing, so we should refactor bellow
// function processTransactions(
//   transactions: Transaction[]
// ): void {
//   validateTransactions(transactions);
//   for (const transaction of transactions) {
//     try {
//       processTransaction(transaction);
//     } catch (error) {
//       showErrorMessage(error.message, error.item);
//     }
//   }
// }

function processTransactions(
  transactions: Transaction[]
): void {
  validateTransactions(transactions);
  for (const transaction of transactions) {
    processTransaction(transaction);
  }
}

// errors do one thing
function processTransaction(
  transaction: Transaction
): void {
  try {
    validateTransaction(transaction);
    processByMethod(transaction);
  } catch (error) {
    showErrorMessage(error.message, error.item);
  }
}

function validateTransaction(transaction) {
  if (!isOpen(transaction)) {
    const error = new Error(
      "Invalid transaction type!"
    );
    throw error;
  }
  if (!haveValidType(transaction)) {
    const error = new Error(
      "Invalid transaction type."
    );
    throw error;
  }
}
function usesTransactionMethod(
  transaction: Transaction,
  method: string
) {
  return transaction.method === method;
}

function processByMethod(transaction) {
  if (
    usesTransactionMethod(
      transaction,
      "CREDIT_CARD"
    )
  ) {
    processCreditCardTransaction(transaction);
  } else if (
    usesTransactionMethod(transaction, "PAYPAL")
  ) {
    processPayPalTransaction(transaction);
  } else if (
    usesTransactionMethod(transaction, "PLAN")
  ) {
    processPlanTransaction(transaction);
  }
}

function processCreditCardTransaction(
  transaction: Transaction
) {
  if (isPayment(transaction)) {
    processCreditCardPayment(transaction);
  } else if (isRefund(transaction)) {
    processCreditCardRefund(transaction);
  }
}
function processPayPalTransaction(
  transaction: Transaction
) {
  if (isPayment(transaction)) {
    processPayPalPayment(transaction);
  } else if (isRefund(transaction)) {
    processPayPalRefund(transaction);
  }
}
function processPlanTransaction(
  transaction: Transaction
) {
  if (isPayment(transaction)) {
    processPlanPayment(transaction);
  } else if (isRefund(transaction)) {
    processPlanRefund(transaction);
  }
}
function validateTransactions(transactions) {
  if (isEmpty(transactions)) {
    const error = new Error(
      "No transactions provided!"
    );
    error.code = 1;
    throw error;
  }
}

function isEmpty(transactions: Transaction[]) {
  return (
    !transactions || transactions?.length === 0
  );
}

function haveValidType(transaction: Transaction) {
  return (
    isPayment(transaction) ||
    isRefund(transaction)
  );
}

function isOpen(transaction: Transaction) {
  return transaction.status === "OPEN";
}

function isPayment(transaction: Transaction) {
  return transaction.type === "PAYMENT";
}

function isRefund(transaction: Transaction) {
  return transaction.type === "REFUND";
}
function showErrorMessage(
  message: string,
  transaction?: Transaction
) {
  console.log(message);
  if (transaction) {
    console.log(transaction);
  }
}
