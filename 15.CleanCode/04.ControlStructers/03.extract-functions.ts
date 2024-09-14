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

  processTransactions(transactions);
}

function processTransactions(
  transactions: Transaction[]
): void {
  if (isEmpty(transactions)) {
    showErrorMessage("No transactions provided!");
    return;
  }
  for (const transaction of transactions) {
    processTransaction(transaction);
  }
}

function processTransaction(
  transaction: Transaction
): void {
  if (!haveValidType) {
    showErrorMessage(
      "Invalid transaction type!",
      transaction
    );
    return;
  }
  if (!isOpen(transaction)) {
    showErrorMessage("Invalid transaction type!");
    return;
  }
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

function usesTransactionMethod(
  transaction: Transaction,
  method: string
) {
  return transaction.method === method;
}

function processCreditCardTransaction(
  transaction: Transaction
) {
  if (isPayment(transaction)) {
    processCreditCardPayment(transaction);
  } else if (isRefund(transaction)) {
    processCreditCardRefund(transaction);
  } else {
    showErrorMessage("Invalid transaction type!");
    return;
  }
}
function processPayPalTransaction(
  transaction: Transaction
) {
  if (isPayment(transaction)) {
    processPayPalPayment(transaction);
  } else if (isRefund(transaction)) {
    processPayPalRefund(transaction);
  } else {
    showErrorMessage("Invalid transaction type!");
    return;
  }
}
function processPlanTransaction(
  transaction: Transaction
) {
  if (isPayment(transaction)) {
    processPlanPayment(transaction);
  } else if (isRefund(transaction)) {
    processPlanRefund(transaction);
  } else {
    showErrorMessage("Invalid transaction type!");
    return;
  }
}

function isEmpty(transactions: Transaction[]) {
  return (
    !transactions || transactions?.length === 0
  );
}

function haveValidType(transaction: Transaction) {
  return (
    transaction.type === "PAYMENT" ||
    transaction.type === "REFUND"
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
