export class Transaction {
    constructor(description, amount) {
        this.id = Date.now();
        this.description = description;
        this.amount = amount;
    }
}