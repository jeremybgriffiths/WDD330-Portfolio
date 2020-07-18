export default class Transaction {
    constructor(description, amount) {
        id: Date.now();
        description: description;
        amount: amount;
    }
}