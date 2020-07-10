const balance = document.getElementById('balance');
const incomeTotal = document.getElementById('income-total');
const expenseTotal = document.getElementById('expense-total');
const history = document.getElementById('history-list');
const transactionForm = document.getElementById('transaction-form');
const description = document.getElementById('description');
const amount = document.getElementById('amount');

const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));

let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

function addTransaction(e) {
    e.preventDefault();

    let transaction = null;
    if (document.querySelector('input[name="transaction-type"]:checked').value === 'income') {
        transaction = {
            id: Date.now(),
            description: description.value,
            amount: +amount.value
        };
    } else if (document.querySelector('input[name="transaction-type"]:checked').value === 'expense') {
        transaction = {
            id: Date.now(),
            description: description.value,
            amount: -amount.value
        };
    }

    transactions.push(transaction);
    addTransactionToHistory(transaction);
    updateBalance();
    localStorage.setItem('transactions', JSON.stringify(transactions));
    description.value = '';
    amount.value = '';
}

function addTransactionToHistory(transaction) {
    const listItem = document.createElement('li');
    const sign = transaction.amount < 0 ? '-' : '+';
    listItem.classList.add(transaction.amount < 0 ? 'expense' : 'income');
    listItem.innerHTML =
        `${transaction.description} <span>${sign} $${Math.abs(transaction.amount).toFixed(2)}` +
        `<button id='delete-btn' onclick='deleteTransaction(${transaction.id})'>x</button></span>`;
    history.appendChild(listItem);
}

function updateBalance() {
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((sum, amount) => {
            return sum + amount;
        },
        0
    ).toFixed(2);

    const income = amounts
        .filter(amount => amount > 0)
        .reduce((sum, amount) => {
                return sum + amount;
            },
            0
        ).toFixed(2);

    const expense = Math.abs(amounts
        .filter(amount => amount < 0)
        .reduce((sum, amount) => {
                return sum + amount;
            },
            0
        )).toFixed(2);

    balance.innerText = `$${total}`;
    incomeTotal.innerText = `$${income}`;
    expenseTotal.innerText = `$${expense}`;
}

function deleteTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    init();
}

function init() {
    history.innerHTML = '';
    transactions.forEach(addTransactionToHistory);
    updateBalance();
}

init();
transactionForm.addEventListener('submit', addTransaction);