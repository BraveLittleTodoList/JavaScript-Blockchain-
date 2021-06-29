function Blockchain() {
    this.chain = [];
    // this.chain is where our blockchain will be stored 
    this.newTransactions = [];
    // this.newTransactions is where we hold the new transactios that are created before they are placed into a block.

    Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, hash) {
        const newBlock = {
            index: this.chain.length + 1,
            timeStamp: Date.now(),
            transactions: this.newTransactions,
            nonce: nonce,
            hash: hash,
            previousBlockHash: previousBlockHash,
        };
        this.newTransactions = [];
        this.chain.push(newBlock);
        return newBlock;
    }
}

module.exports = Blockchain;